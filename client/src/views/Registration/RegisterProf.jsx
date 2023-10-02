import React,{useState} from 'react'
import Nav from '../../components/homepage-Components/Nav'
import RegisterTeacher from './RegisterTeacher'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const RegisterProf = () => {


  const [teacher, setTeacher] = useState({email:"",password:"",subject:"",imageTeacherKey: 0 })
  const navigate = useNavigate()

  const register = (e, newUser)=>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/teacher/register', newUser, {withCredentials:true})
    .then(serverResponse=> {
        console.log(serverResponse)
        navigate('/teacher')
    })
    .catch(error=>console.log(error))
    

}



  return (
    
    

    <>
    <Nav/>
    
    <RegisterTeacher operation={register} user={teacher} setter={setTeacher}/>

    
    
    
    
    </>






  )
}

export default RegisterProf