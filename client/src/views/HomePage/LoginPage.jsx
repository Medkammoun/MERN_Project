import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../../components/LoginComponents/Login';
import Nav from '../../components/homepage-Components/Nav';

const LoginPage = () => {
  const [student, setStudent] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [isTeacher, setIsTeacher] = useState(null);


  const checkUserType = () => {
    axios
      .post('http://localhost:8000/api/checkUserType', { email: student.email })
      .then((response) => {
        setIsTeacher(response.data.isTeacher);
        console.log(response.data.isTeacher,"***********");
      })
      .catch((error) => {
        console.error('Error checking user type:', error);
        setIsTeacher(false); // Default to student if there's an error
      });
  };

  // Function to handle login based on user type
  const handleLogin = (e) => {
    e.preventDefault();
    // axios
    //   .post('http://localhost:8000/api/checkUserType', { email: student.email })
    //   .then((response) => {
    //     setIsTeacher(response.data.isTeacher);
    //     console.log(response.data.isTeacher,"***********");
    //   })
    //   .catch((error) => {
    //     console.log('Error checking user type:', error);
    //     setIsTeacher(false); // Default to student if there's an error
    //   });
    // Check user type before proceeding
    checkUserType();
    console.log(isTeacher,"**________************");

    if (isTeacher === true) {
      // Perform teacher login
      axios
        .post('http://localhost:8000/api/teacher/login', student, { withCredentials: true })
        .then((serverResponse) => {
          console.log(serverResponse,"******************************");
          navigate('/teacher');
        })
        .catch((error) => console.log('Teacher login error: ', error));
    } else {
      // Perform student login
      axios
        .post('http://localhost:8000/api/student/login', student, { withCredentials: true })
        .then((serverResponse) => {
          console.log(serverResponse);
          navigate('/student');
        })
        .catch((error) => console.log('Student login error: ', error));
    }
  };

  return (
    <div className="min-w-full">
      <Nav />
      <div className="w-full">
        {/* Pass the handleLogin function to the Login component */}
        <Login operation={handleLogin} student={student} setter={setStudent} />
      </div>
    </div>
  );
};

export default LoginPage;