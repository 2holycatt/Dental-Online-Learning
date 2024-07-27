const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const studentSchema = new Schema(
{
    studentId:{
        type: 'string',
        unique: true
    },
    yearLevel:{ 
        type: String,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    notification:{
        type: mongoose.Schema.ObjectId,
        ref: 'Notification'
    },
    quizes:{
        type: mongoose.Schema.ObjectId,
        ref: 'Quiz'
    },
    lessonArray:{
        type: mongoose.Schema.ObjectId,
        ref: 'lessons'
    },
    comments:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Comment'
    }],
    logsFiles:{
        type: mongoose.Schema.ObjectId,
        ref: 'LogsFile'
    },
    schoolYear:{
        type: mongoose.Schema.ObjectId,
        ref: 'schoolYear'
    },
    students:[{
        type: mongoose.Schema.ObjectId,
        ref: 'student'
    }],
    weeks: [
        {
            week : {
                type: String
            },
            scorePerWeek: {
                type: Number
            },
            noteWeek : {
                type: String
            }
        }
    ]
}, {
    timestamps: true
}
)

const Student = mongoose.model('Student', studentSchema)

module.exports = Student