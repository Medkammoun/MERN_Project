const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const StudentSchema = new mongoose.Schema({
    first_name: { type: String ,
    required:[true,"DON'T YOU HAVE A FIRST NAME ?"],
    minlength:[3,"3 characters 🤟 Minimum "]

},
classes:{type:String,
    required:[true,"What is your Class Grade"],
    enum: ["Sixième",  "Cinquième",  "Quatrième", "Troisième"],
    


},
last_name:{ type:String,
    required:[true,"DON'T YOU HAVE A LAST NAME ?"],
    minlength:[3,"3 characters 🤟 Minimum "]


},

    email:{type:String  ,
    required:[true,"Where is your Email"],
    validate: {
        validator: val=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
        message:"PLEASE ENTER A VALID EMAIL"
    }


},
password:{
    type:String,
    required:[true,"You didn't find any ?"],
    minlength:[6,"Password must be 6 caracters at least "]
},
enrollments: {
    type:[mongoose.Schema.Types.ObjectId],
    ref:'Enrollment'
}

}, { timestamps: true });


StudentSchema.virtual("confirmPassword")
  .get(function () {
    return this._confirmPassword;
  })
  .set(function (value) {
    this._confirmPassword = value;
  });

StudentSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    console.log("The PASSWORD : ",this.password , "THE CONFIRM PASSWORD :" ,this.confirmPassword);
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

StudentSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});


const Student = mongoose.model("Student",StudentSchema);
module.exports= {Student, StudentSchema}
