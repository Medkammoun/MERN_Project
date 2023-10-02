const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema(
  {
    classGrade: {
      type: String,
      required: [true, "For what class is your Grade designed"],
      enum: ["Sixième", "Cinquième", "Quatrième", "Troisième"],
    },
    title: {
      type: String,
      required: [true, "DON'T YOU HAVE A Title"],
      minlength: [3, "3 characters 🤟 Minimum "],
    },

    price: {
      type: Number,
      required: [true, "What is your Price"],
    },

    dates: {
      type: Date,
      required: true,
    },

    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },

    students_enrolled: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Student",
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", CoursesSchema);
module.exports = { Course, CoursesSchema };
