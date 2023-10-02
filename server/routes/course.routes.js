const courseController= require('../controllers/course.controller');


module.exports= app=>  {

    
    app.post('/api/course/apply',courseController.applyToCourse)
    app.post('/api/course',courseController.createCourse)
    app.get('/api/course',courseController.findAllCourses)
    app.get('/api/course/find/:id',courseController.finOneCourse)
    app.put('/api/course/update/:id',courseController.updateCourse)
    app.delete('/api/course/delete/:id',courseController.deleteCourse)
    app.get('/api/course/dsdsd',courseController.findAllCoursesOfTheCurrentLogged)
    app.get('/api/course/student',courseController.findAllCoursesOfTheStudent)


}