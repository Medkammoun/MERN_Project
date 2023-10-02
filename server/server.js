const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config()
const cookies = require('cookie-parser')

//GLOBAL VARIABLES
const PORT = process.env.PORT
const DB = process.env.DB


app.use(
    express.json() ,express.urlencoded({ extended: true })
    ,cors({credentials:true, origin:"http://localhost:5173"})
    ,cookies()
    
) ;

require('./config/mongoose.config')(DB)
require('./routes/student.routes')(app)
require('./routes/enrollment.routes')(app)
require('./routes/teacher.routes')(app)
require('./routes/course.routes')(app)



console.log(`PORT: ${PORT}`);
console.log(`DB: ${DB}`);
app.listen(PORT,()=>console.log(`>>>SERVER IS RUNNING ON PORT ${PORT}<<<`))