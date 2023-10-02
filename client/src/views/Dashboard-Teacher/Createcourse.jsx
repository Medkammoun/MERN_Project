import React ,{useState} from 'react'
import CreateCourseForm from '../../components/Dashboard-Teacher-Components/CourseForm'
import Nav from '../../components/homepage-Components/Nav'
import axios from 'axios'
import { useNavigate, Link,Navigate } from 'react-router-dom'
import NavDashboardTeacher from '../../components/Dashboard-Teacher-Components/NavDashboardTeacher'


const Createcourse = () => {
    const navigate = useNavigate();
    const [course, setCourse] = useState({
        title: '',
        dates: '', 
        price: '',
        classGrade: 'Sixième',
        imageUrl: '',
        
       
    });


    const formHandler = (e)=>{
        e.preventDefault()
        console.log("SUBMITTED Course ",course)
        
        axios.post("http://localhost:8000/api/course",course,{withCredentials:true})
        .then(serverResponse => {
            console.log(serverResponse);
            
            navigate('/teacher')
            setCourse({title:"",dates:"",price:"" ,classGrade:""});
            console.log(dates, "this is the dates Im having ")
        })

        .catch(error=> {
            console.log(error)
        })
    
    
    }

    return (




    <>
    <NavDashboardTeacher/>
    <CreateCourseForm course={course} setCourse={setCourse} formHandler={formHandler}   />
    
    
    </>
  )
}

export default Createcourse