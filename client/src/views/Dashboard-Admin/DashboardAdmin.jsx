import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Allusers from '../../components/Dashboard-Admin-Components/allUsers'
import AllTeachers from '../../components/Dashboard-Admin-Components/allTeachers'



const DashboardAdmin = () => {

        const [students,setStudents]=useState([])
        const [teachers,setTeacher]=useState([])
        const navigate = useNavigate()
    




        // STUDENT FUNCTIONS 


        useEffect(()=>{
            axios.get("http://localhost:8000/api/student")
            .then(serverResponse =>{
            
            console.log(serverResponse.data)
            setStudents(serverResponse.data)
            })
            .catch(serverError=> console.log(serverError))
        },[])
        


        const deleteStudent = (studentId) => {
          axios.delete('http://localhost:8000/api/student/' + studentId)
              .then(res => {
                  console.log(res)
                  const removeFromDom=  students.filter(student => student._id != studentId)
                  setStudents(removeFromDom)

              })
              .catch(err => console.log(err));
      }






        useEffect(()=>{
          axios.get("http://localhost:8000/api/teacher")
          .then(serverResponse =>{
          
          console.log(serverResponse.data)
          setTeacher(serverResponse.data)
          })
          .catch(serverError=> console.log(serverError))
      },[])

      const deleteTeacher = (teacherId) => {
        axios.delete('http://localhost:8000/api/teacher/' + teacherId)
            .then(res => {
                console.log(res)
                const removeFromDom=  teachers.filter(teacher => teacher._id != teacherId)
                setTeacher(removeFromDom)

            })
            .catch(err => console.log(err));
    }





  return (
    
    <>
    <Allusers student={students} setter={setStudents} delstudent={deleteStudent}/>

    <AllTeachers teacher={teachers} setteacher={setTeacher} delTeacher={deleteTeacher}/>


    
    </>

  )
}

export default DashboardAdmin