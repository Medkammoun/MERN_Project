const EnrollmentController= require('../controllers/enrollment.controller');


module.exports= app=>  {
    app.post('/api/enrollment',EnrollmentController.createEnrollment)
    app.get('/api/enrollment',EnrollmentController.findAllEnrollments)
    app.get('/api/enrollment/:id',EnrollmentController.finOneEnrollment)
    app.put('/api/enrollment/:id',EnrollmentController.updateEnrollment)
    app.delete('/api/enrollment/:id',EnrollmentController.deleteEnrollment)
    app.post('/api/enrollment/:id/apply',EnrollmentController.studentenroll);
}