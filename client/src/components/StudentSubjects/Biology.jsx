import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Nav from '../../components/homepage-Components/Nav';
import dashteacher from '../../assets/tracherPhotos/dashteacher.jpg';
import Teacher1 from '../../../public/img/Teacher1.jpeg'

const Biology = () => {
  const [courses, setCourses] = useState([]);

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
      const response = await axios.post(
        'http://localhost:8000/api/course/apply',
        { courseId: courseId },
        { withCredentials: true }
      );
      console.log(response.data);
      // Handle success or display a message to the user
    } catch (error) {
      console.error(error);
      // Handle errors or display an error message to the user
    }
  };

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${dashteacher})`, // Use your background image
      }}
    >
      <Nav />
      <div className="flex flex-col md:flex-row justify-center h-full">
        <div className="bg-white bg-opacity-30 rounded-lg shadow-md w-full dark:bg-gray-800 dark:bg-opacity-80 dark:border dark:border-gray-700 md:p-12">
          <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            Biology Courses
          </h1>
          <div className="flex justify-around flex-wrap">
            {courses.map((course) => (
              <div
                key={course._id}
                className="w-[30%] bg-white bg-opacity-95 rounded-lg p-6 mb-6 hover:shadow-md transition duration-300"
              >
                <img
                  src={Teacher1}
                  alt="Teacher"
                  className="w-12 h-12 rounded-full border border-white"
                />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {course.title}
                </h2>
                <div className="flex flex-row">
                  <div className="font-semibold mr-3">Teacher: {course.teacher.firstName}</div>
                </div>
                <div className="flex flex-row">
                  <div className="font-semibold mr-3">Class Grade: {course.classGrade}</div>
                </div>
                <div className="flex flex-row">
                  <div className="font-semibold mr-3">Price: {course.price}</div>
                </div>
                <div className="flex flex-row">
                  <div className="font-semibold mr-3">Date: {moment(course.dates).format('DD-MM-YYYY')}</div>
                </div>
                <div className="font-semibold mr-3">Time: {moment(course.dates).format('HH:mm')}</div>

                <div className="text-center mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => applyToCourse(course._id)}
                  >
                    Apply to Course
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Link to={'/student'} className="absolute bottom-4 right-4">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Biology;
