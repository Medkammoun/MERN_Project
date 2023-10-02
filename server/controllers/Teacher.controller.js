const {Teacher} = require('../models/Teacher.model');
const {Student} = require('../models/student.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose");
const SECRET = process.env.SECRET



module.exports={


    findAllTeacher:(req,res)=>{
        Teacher.find()
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    createTeacher:(req,res)=>{
        Teacher.create(req.body)
        .then(response=>
            res.status(201).json(response)

            )
        .catch(error=>res.status(400).json(error.errors))
    },


    AllowTeacher:(req,res)=>{
        
    },
    finOneTeacher:(req,res)=>{
        Teacher.findOne({_id:req.params.id})
        .populate('courses') 
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(404).json(error))
    },
    updateTeacher:(req,res)=>{
        Teacher.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    deleteTeacher:(req,res)=>{
        Teacher.findByIdAndDelete({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    // findOneTeacher:(req,res)=>{
    //     Teacher.findOne({id : _id})
    //     .then(response=>res.status(401).json({message:"You must choose an other role "}))
    //     .catch(error=>res.status(200).json({message:"Great Role"}))

    // },
    register: async (req, res) => {
        try {
            const teacher = new Teacher(req.body);
            const newTeacher = await teacher.save()
            const teacherToken = jwt.sign({id:newTeacher._id}, SECRET)
            console.log(`USER ID ${newTeacher._id} \teacherToken : ${teacherToken} `);

            res.status(201).cookie("teacherToken", teacherToken, {httpOnly:true}).json(newTeacher)
            

        }
        catch (error) {
            res.status(400).json(error)
        }
    },
login: async (req, res) => {
        const teacherFromDB = await Teacher.findOne({ email: req.body.email });
        if (!teacherFromDB) {
            res.status(404).json({ error: "USER NOT FOUND" })
        } else {
            try {
                const isPasswordValid = await bcrypt.compare(req.body.password, teacherFromDB.password)
                if (isPasswordValid) {
                    const teacherToken = jwt.sign({id: teacherFromDB._id}, SECRET)
                    console.log(`USER ID ${teacherFromDB._id} \teacherToken : ${teacherToken} `);
                    res.status(200).cookie("teacherToken", teacherToken, {httpOnly:true}).json({ message: "Teacher Logged in successfully !!" })
                } else {
                    res.status(400).json({ message: "PAssword incorrect" })
                }
            }
            catch (error) {
                res.status(400).json({ message: 'invalid email/password', error })
            }
        }
    },


logout: async (req, res) => {
        try {
            console.log('****',req.cookies.teacherToken,'****');
            res.clearCookie("teacherToken")
            res.status(200).json({message:"Teacher logged out Successfully!!"})
        } catch (error) {
            res.status(500).json({message:'Somenthing went wrong', error})
        }
    },

getLoggedUser: async (req,res) => {
        try {
            const teacherToken = req.cookies.teacherToken;
            const loggedUserId = jwt.verify(teacherToken, SECRET)
            console.log('teacherToken : ',teacherToken,'\nuser id: ',loggedUserId);
            const teacher = await Teacher.findOne({_id: loggedUserId.id})
            res.status(200).json(teacher)
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'no token provided'})
        }
    },

isTeacherEmail: async (req, res) => {
        try {
          // Check if the email exists in the Teacher collection
          const teacher = await Teacher.findOne({ email: req.body.email });
          if (teacher) {
            res.json({ isTeacher: true }); // Send JSON response
            return; // Exit the function
          }
      
          // Check if the email exists in the Student collection
          const student = await Student.findOne({ email: req.body.email });
          if (student) {
            res.json({ isTeacher: false }); // Send JSON response
            return; // Exit the function
          }
      
          // Email doesn't exist in either collection
          res.json({ isTeacher: false }); // Send JSON response
        } catch (error) {
          console.error("Error checking email:", error);
          res.status(500).json({ error: "An error occurred" }); // Handle errors gracefully
        }
      },


      updateLoggedUser: async (req, res) => {
        try {
            const teacherToken = req.cookies.teacherToken;
            if (!teacherToken) {
                return res.status(401).json({ error: "Unauthorized User" });
            }
            const decodedToken = jwt.verify(teacherToken, SECRET);
            if (!decodedToken.id) {
                return res.status(401).json({ error: 'Invalid Token' });
            }
            const userId = new mongoose.Types.ObjectId(decodedToken.id);
    
            // Check if the request body includes a new password
            if (req.body.password) {
                // Hash the new password with bcrypt
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                req.body.password = hashedPassword; // Replace the plain password with the hashed one
            }
    
            const updatedTeacher = await Teacher.findByIdAndUpdate(userId, req.body, { new: true });
    
            if (!updatedTeacher) {
                return res.status(404).json({ error: 'Teacher not found' });
            }
    
            res.status(200).json(updatedTeacher);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    
    
    
    
    
      


}

