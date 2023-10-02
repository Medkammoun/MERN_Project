const StudentController= require('../controllers/student.controller');


module.exports= app=>  {
    app.post('/api/student',StudentController.createStudent)
    app.get('/api/student',StudentController.findAllStudents)
    app.get('/api/student/loggedUser', StudentController.getLoggedUser)
    app.get('/api/student/:id',StudentController.finOneStudent)
    app.put('/api/student/:id',StudentController.updateStudent)
    app.delete('/api/student/:id',StudentController.deleteStudent)
    app.post('/api/student/register', StudentController.register)
    app.post('/api/student/login', StudentController.login)
    app.post('/api/student/logout', StudentController.logout)
}
