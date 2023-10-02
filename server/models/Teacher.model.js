const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const TeacherSchema = new mongoose.Schema(
  {
   
    firstName: {
      type: String,
      required: [true, "Teacher firstname  is required "],
      minlength: [3, "name  must be at least 3 characters "],
    },
    lastName: {
      type: String,
      required: [true, "Teacher last name  is required "],
      minlength: [3, "Last name must be at least 3 characters "],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be 6 characters or longer"],
    },
    subject: {
      type: String,
      enum: ["Math", "Physics", "Mern", "Science","History","Geography"],
      required: [true, "Subject is required "],
    },

    is_allowed: {
      type: Boolean,
      default: true,
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "Teacher already registered"],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    imageTeacherKey: { type: Number ,
    default : 0,
    },
    courses:[{
      type:[mongoose.Schema.Types.ObjectId],
      ref:'Course'
    }],
  
  },
  { timestamps: true }
);

TeacherSchema.virtual("confirmPassword")
  .get(function () {
    return this._confirmPassword;
  })
  .set(function (value) {
    this._confirmPassword = value;
    
  });

TeacherSchema.pre("validate", function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

TeacherSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
  });
});

const Teacher = mongoose.model("Teacher",TeacherSchema);
module.exports= {Teacher, TeacherSchema}



