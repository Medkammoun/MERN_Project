const mongoose = require('mongoose');
const { StudentSchema } = require('./student.model')
const {CoursesSchema} = require('./courses.model')


const EnrollmentSchema = new mongoose.Schema({ 

    date:{type:Date ,
    required:[true,"Choose a date"],
},
student:{
    type:[mongoose.Schema.Types.ObjectId],
    ref:'Student'
},

course : {
    type:[mongoose.Schema.Types.ObjectId],
    ref:'Course'
}

}, { timestamps: true });






const Enrollment = mongoose.model("Enrollment",EnrollmentSchema);
module.exports= {Enrollment, EnrollmentSchema}
