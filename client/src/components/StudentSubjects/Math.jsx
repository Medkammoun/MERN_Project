import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Math() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/course')
      .then((serverResponse) => {
        console.log(serverResponse.data);
        setCourses(serverResponse.data);
      })
      .catch((serverError) => console.log(serverError));
  }, []);


  const applyToCourse = async (courseId) => {
    try {
      const response = await axios.post('http://localhost:8000/api/course/apply', {
        courseId: courseId, // Pass the courseId as a parameter
      });
      console.log(response.data);
      // Handle success or display a message to the user
    } catch (error) {
      console.error(error);
      // Handle errors or display an error message to the user
    }
  };

  // Filter the courses where course.teacher.subject === "Mern"
  const filteredCourses = courses.filter((course) => course.teacher.subject === "Math");

  return (
    <>
      {filteredCourses.map((course) => (
        <div key={course._id}>
          <div
            style={{ width: '800px', display: 'flex', justifyContent: 'space-around', height: '200px' }}
            className="container mt-10"
          >
            <div 
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">Teacher: {course.teacher.firstName}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">Class: {course.classGrade}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">Price: {course.price}</p>

              {/* Separating Date and Time */}
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Date: {new Date(course.dates).toLocaleDateString()}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Time: {new Date(course.dates).toLocaleTimeString()}
              </p>
            </div>

            <div className="text-center mt-4">
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => applyToCourse(course._id)}
                >
                Submit to the Course
</button>
            </div>
          </div>
        </div>
      ))}
      <Link to={'/student'}><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
      Go Back
</button></Link>
    </>
  );
}

export default Math;