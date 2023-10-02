const {Enrollment} = require('../models/enrollment.model');
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET



module.exports={


    findAllEnrollments:(req,res)=>{
        Enrollment.find()
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    createEnrollment:(req,res)=>{
        Enrollment.create(req.body)
        .then(response=>
            res.status(201).json(response)

            )
        .catch(error=>res.status(400).json(error.errors))
    },
    finOneEnrollment:(req,res)=>{
        Enrollment.findOne({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(404).json(error))
    },
    updateEnrollment:(req,res)=>{
        Enrollment.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    deleteEnrollment:(req,res)=>{
        Enrollment.findByIdAndDelete({_id:req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))
    },
    findOneEnrollment:(req,res)=>{
        Enrollment.findOne({crewPosition:"Captain"})
        .then(response=>res.status(401).json({message:"You must choose an other role "}))
        .catch(error=>res.status(200).json({message:"Great Role"}))

    },
    studentenroll: async (req, res) => {
        const { id: userId } = jwt.verify(req.cookies.userToken, SECRET);
        const serviceId = req.params.id;
    
        try {
          const updatedService = await Enrollment.findByIdAndUpdate(
            serviceId,
            { $push: { student: userId } },
            { new: true }
          );
    
          res.status(200).json(updatedService);
        } catch (error) {
            console.error("Error applying to the service:", error);
            res.status(500).json({ error: "Internal server error." });
            res.status(401).json({ error: "Invalid or expired token." });
          }
      },


    
}

