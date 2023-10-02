import React,{useState} from 'react';
import NavDashboardTeacher from '../../components/Dashboard-Teacher-Components/NavDashboardTeacher';
import EditProfileTeacherComponent  from '../../components/Dashboard-Teacher-Components/EditProfileTeacherComponent';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const ProfessorPage = () => {

  const [teacherr, setTeacherr] = useState({email:"",password:"",subject:""})
  const navigate = useNavigate()

  const update = (e, newUser)=>{
    e.preventDefault();
    axios.put('http://localhost:8000/api/teacher/update', newUser, {withCredentials:true})
    .then(serverResponse=> {
        console.log(serverResponse)
        navigate('/teacher')
    })
    .catch(error=>console.log(error))
    

}



  return (
    <>
  

     

    <NavDashboardTeacher />
        

        <EditProfileTeacherComponent operation={update} user={teacherr} setter={setTeacherr} />
      

 
  
    </>
  );
};

export default ProfessorPage;
