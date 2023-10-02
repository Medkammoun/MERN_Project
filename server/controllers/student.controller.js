const {Student} = require('../models/student.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET = process.env.SECRET

module.exports={


    findAllStudents:(req,res)=>{
        Student.find()
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    createStudent:(req,res)=>{
        Student.create(req.body)
        .then(response=>
            res.status(201).json(response)
            )
        .catch(error=>res.status(400).json(error.errors))
    },
    finOneStudent:(req,res)=>{
        Student.findOne({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(404).json(error))
    },
    updateStudent:(req,res)=>{
        Student.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    deleteStudent:(req,res)=>{
        Student.findByIdAndDelete({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },

    register: async (req, res) => {
        try {
            const student = new Student(req.body);
            const newStudent = await student.save()
            const userToken = jwt.sign({id:newStudent._id}, SECRET)
            console.log(`USER ID ${newStudent._id} \nuserToken : ${userToken} `);

            res.status(201).cookie("userToken", userToken, {httpOnly:true}).json(newStudent)
            

        }
        catch (error) {
            res.status(400).json(error)
        }
    },
    login: async (req, res) => {
        const userFromDB = await Student.findOne({ email: req.body.email });
        if (!userFromDB) {
            res.status(404).json({ error: "USER NOT FOUND" })
        } else {
            try {
                const isPasswordValid = await bcrypt.compare(req.body.password, userFromDB.password)
                if (isPasswordValid) {
                    const userToken = jwt.sign({id: userFromDB._id}, SECRET)
                    console.log(`USER ID ${userFromDB._id} \nuserToken : ${userToken} `);
                    res.status(200).cookie("userToken", userToken, {httpOnly:true}).json({ message: "User Logged in successfully !!" })
                    // res.status(200).json({ message: "User Logged in successfully !!" })
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
            console.log('****',req.cookies.userToken,'****');
            res.clearCookie("userToken")
            res.status(200).json({message:"User logged out Successfully!!"})
        } catch (error) {
            res.status(500).json({message:'Somenthing went wrong', error})
        }
    },


    
    getLoggedUser: async (req,res) => {
        try {
            const userToken = req.cookies.userToken;
            const loggedUserId = jwt.verify(userToken, SECRET)
            console.log('userToken : ',userToken,'\nuser id: ',loggedUserId);
            const user = await Student.findOne({_id: loggedUserId.id})
            res.status(200).json(user)
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'no token provided'})
        }
    }
}

