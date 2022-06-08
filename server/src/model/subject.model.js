const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
    {
        subjectName: { type: String, required: true },
        student_id: [
          { type: mongoose.Schema.Types.ObjectId, ref: "user", required: false },
        ],
        faculty_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: false,
        },
        academic_id:{type: mongoose.Schema.Types.ObjectId, ref:"academics",required:true}
      
      },
      {
        versionKey: false,
        timestamps: true,
      }
)

let Subject= mongoose.model('subject',subjectSchema);

module.exports = Subject;