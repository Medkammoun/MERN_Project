import React, { useState, useEffect } from 'react';


import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavDashboardTeacher from '../../components/Dashboard-Teacher-Components/NavDashboardTeacher';
import AllEnrollementComponent from '../../components/Dashboard-Teacher-Components/AllEnrollementComponent'
const AllEnrollements = () => {
  const [enrollements, setEnrollements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/enrollment", { withCredentials: true })
      .then((response) => {
        // Check if the response status is OK (status code 200)
        if (response.status === 200) {
          // Access the data directly from the response object
          setEnrollements(response.data);
        } else {
          console.error('Error fetching Enrollements. Status:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error fetching Enrollements:', error);
      });
  }, []);

  return (
    <>
      <NavDashboardTeacher />
      
      <AllEnrollementComponent enrollements={enrollements} />
    </>
  );
};

export default AllEnrollements;
