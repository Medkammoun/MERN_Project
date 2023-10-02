const teacherController = require("../controllers/Teacher.controller");


module.exports = (app) => {
    app.post('/api/teacher',teacherController.createTeacher)
    app.get('/api/teacher',teacherController.findAllTeacher)
    app.get('/api/teacher/:id',teacherController.finOneTeacher)
    // app.put('/api/teacher/:id',teacherController.updateTeacher)
    app.delete('/api/teacher/pss/:id',teacherController.deleteTeacher)
    app.post('/api/teacher/register', teacherController.register)
    app.post('/api/teacher/login', teacherController.login)
    app.post('/api/teacher/logout', teacherController.logout)
    app.get('/api/teacher/loggedUser', teacherController.getLoggedUser)
    app.post('/api/checkUserType',teacherController.isTeacherEmail)
    app.put('/api/teacher/update', teacherController.updateLoggedUser)
};
