var mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  image: { type: String },
  username: { type: String, required: true },
  role: { type: String },
  qualification: { type: String },
  year: { type: String },
  gpa: { type: String },
  university: { type: String },
  location: { type: String },
  qualification1: { type: String },
  year1: { type: String },
  gpa1: { type: String },
  university1: { type: String },
  location1: { type: String },
  professionalDescription: { type: String },
  careerDescription: { type: String },
  experiences: { type: String },
  skillname: { type: String },
  proficiency: { type: Number },
  skillname1: { type: String },
  proficiency1: { type: Number },
  achievements: { type: String },
  email: { type: String },
  number: { type: Number },
  address: { type: String },
});

module.exports = mongoose.model("ResumeFeilds", ResumeSchema);
