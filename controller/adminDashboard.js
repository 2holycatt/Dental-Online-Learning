
const adminDashboard = async (req, res) => {
    try {
        res.render('teacherDashboard')
    } catch (err) {
        console.log(err);
    }
}

const progressHistory = async (req, res) => {
    try {
        res.render('progressHistory')
    } catch (err) {
        console.log(err);
    }
}

const moreDetailChart = async (req, res) => {
    try {
        res.render('moreDetailChart')
    } catch (err) {
        console.log(err);
    }
}

const studentDetail = async (req, res) => {
    try {
        res.render('studentDetailChart')
    } catch (err) {
        console.log(err);
    }
}

module.exports= {
    adminDashboard,
    progressHistory,
    moreDetailChart,
    studentDetail
}