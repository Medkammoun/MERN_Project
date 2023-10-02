import React, { useState } from 'react'
import RegisterForm from '../components/registration/Register'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from '../components/homepage/Nav'

const RegisterStudent = () => {

    const [user, setUser] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    const register = (e, newUser) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/student/register', newUser, { withCredentials: true })
            .then(serverResponse => {
                console.log(serverResponse)
                navigate('/student')
            })
            .catch(error => console.log(error))


    }






    return (







        <>

            <Nav />

            <RegisterForm operation={register} user={user} setter={setUser} />

        </>





    )

}
export default RegisterStudent