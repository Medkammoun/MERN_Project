
const {Course} = require('../models/courses.model');
const SECRET = process.env.SECRET 
const jwt = require('jsonwebtoken')
const {Teacher} = require('../models/Teacher.model')
const cookieParser = require('cookie-parser');





module.exports={


    findAllCoursesOfTheCurrentLogged: async (req, res) => {
        try {
          // Get the teacherToken cookie from the request
          const teacherToken = req.cookies.teacherToken;
      
          if (!teacherToken) {
            // Handle the case when the cookie is not present
            return res.status(401).json({ error: 'Unauthorized' });
          }
      
          // Verify and decode the teacherToken to get the user ID
          const decodedToken = jwt.verify(teacherToken, SECRET);
      console.log(decodedToken.id)
          // Ensure that the decodedToken contains the expected user ID
          if (!decodedToken.id) {
            return res.status(401).json({ error: 'Invalid token' });
          }
      
          const userId = decodedToken.id;
      
          // Use the userId to filter courses
          const courses = await Course.find({ teacher: userId });
      
          console.log(courses, "******************");
          res.status(200).json(courses);
        } catch (error) {
          console.error("Error finding courses:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      },





    findAllCoursesOfTheStudent: async (req, res) => {
      try {
        // Get the teacherToken cookie from the request
        const userToken = req.cookies.userToken;
        console.log("This is the token :::::::::::::::",userToken)
    
        if (!userToken) {
          // Handle the case when the cookie is not present
          return res.status(401).json({ error: 'Unauthorized' });
        }
    
        // Verify and decode the teacherToken to get the user ID
        const decodedToken = jwt.verify(userToken, SECRET);
    console.log(decodedToken.id)
        // Ensure that the decodedToken contains the expected user ID
        if (!decodedToken.id) {
          return res.status(401).json({ error: 'Invalid token' });
        }
    
        const userId = decodedToken.id;
    
        // Use the userId to filter courses
        const courses = await Course.find({ students_enrolled: userId });
    
        console.log(courses, "******************");
        res.status(200).json(courses);
      } catch (error) {
        console.error("Error finding courses:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    },

  

      findAllCourses: async (req, res) => {
        try {
          const AllCourses = await Course.find()
          .populate('teacher')
          ;
          console.log(AllCourses, "******************");
          res.status(200).json(AllCourses);
        } catch (error) {
          console.error("Error finding courses:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      },
      applyToCourse: async (req, res) => {
        const { id: userId } = jwt.verify(req.cookies.userToken, SECRET);
        const courseId = req.body.courseId; // Get courseId from the request body
      
        try {
          // Check if the user is already enrolled in the course
          const course = await Course.findById(courseId);
      
          if (course.students_enrolled.includes(userId)) {
            return res.status(400).json({ error: "User is already enrolled in this course." });
          }
      
          // Add the user's ID to the students_enrolled array of the course
          const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            { $push: { students_enrolled: userId } },
            { new: true }
          );
      
          res.status(200).json(updatedCourse);
        } catch (error) {
          res.status(400).json({ error: "Error applying to the course." });
        }
      },


    
    
    createCourse: async (req, res) => {
        const teacherToken = req.cookies.teacherToken;
        const { id: userId } = jwt.verify(teacherToken, SECRET);
        console.log(userId, "***************÷");
        try {
          // Create a new course and store the reference to the teacher
          const newCourse = await Course.create({ ...req.body, teacher: userId });
          console.log(newCourse, "******************");
      
          // Update the teacher's courses array with the new course
          const updatedTeacher = await Teacher.findByIdAndUpdate(
            userId,
            { $push: { courses: newCourse._id } },
            { new: true } // This ensures you get the updated teacher document
          );
      
          // Check if the teacher was found and updated
          if (!updatedTeacher) {
            return res.status(404).json({ error: "Teacher not found" });
          }
      
          res.status(201).json(newCourse);
        } catch (error) {
          console.log("DATABASE Create course:", error);
          res.status(400).json(error.errors);
        }
      }
    
    ,
    finOneCourse:(req,res)=>{
        Course.findOne({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(404).json(error))
    },
    updateCourse:(req,res)=>{
        Course.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    deleteCourse:(req,res)=>{
        Course.findByIdAndDelete({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },




}

