const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        student_id: [
          { type: mongoose.Schema.Types.ObjectId, ref: "user", required: false },
        ],
        faculty_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: false,
        },
        subject_id:{type: mongoose.Schema.Types.ObjectId, ref:"subject",required:true},
        startDate:{ type: String, required: true},
        endDate:{ type: String, required: true},
       
      
      },
      {
        versionKey: false,
        timestamps: true,
      }
)

let Assignment= mongoose.model('assignment', assignmentSchema);

module.exports = Assignment;