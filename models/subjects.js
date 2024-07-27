const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const subjectYearSchema = new Schema(
    {
        subjectId: {
            type: String,
        },
        subjectName: {
            type: String
        },
        credit: {
            type: String
        },
        semester: {
            type: String
        },
        unit: {
            type: String
        },
        section: {
            type: String
        },
        students: [{
            type: mongoose.Schema.ObjectId,
            ref: 'student',
            default: 0
        }],
        quizes: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Quiz',
            default: 0
        }],
        lessonArray: [{
            type: mongoose.Schema.ObjectId,
            ref: 'lessons',
            default: 0
        }],
        Assignments: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Assignments',
            default: 0
        }]
    }, {
    timestamps: true
})

subjectYearSchema.index({ subjectId: 1, semester: 1 }, { unique: true });

const subject = mongoose.model('subject', subjectYearSchema)

module.exports = subject