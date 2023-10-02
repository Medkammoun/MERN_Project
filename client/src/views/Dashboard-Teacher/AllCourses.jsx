import React, { useState, useEffect } from 'react';
import AllCoursesComponent from '../../components/Dashboard-Teacher-Components/AllCoursesComponent';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavDashboardTeacher from '../../components/Dashboard-Teacher-Components/NavDashboardTeacher';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/course/dsdsd", { withCredentials: true })
      .then((response) => {
        // Check if the response status is OK (status code 200)
        if (response.status === 200) {
          // Access the data directly from the response object
          setCourses(response.data);
        } else {
          console.error('Error fetching courses. Status:', response.status);
        }
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <>
      <NavDashboardTeacher />
      <AllCoursesComponent courses={courses} />
    </>
  );
};

export default CourseList;
