import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import dashteacher from '../../assets/tracherPhotos/dashteacher.jpg';
import Teacher1 from '../../../public/img/Teacher1.jpeg'
import Nav from '../homepage-Components/Nav';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/course/student', { withCredentials: true })
      .then((serverResponse) => {
        console.log(serverResponse.data);
        setCourses(serverResponse.data);
      })
      .catch((serverError) => console.log(serverError));
  }, []);

  return (
    <section
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${dashteacher})`, // Use your background image
      }}
    >
      <Nav />
      <div className="flex flex-col md:flex-row justify-center h-full">
        <div className="bg-white bg-opacity-30 rounded-lg shadow-md w-full  dark:bg-gray-800 dark:bg-opacity-80 dark:border dark:border-gray-700 md:p-12">
          <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            My Courses
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
                  <div className="font-semibold mr-3">Course Date:</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {moment(course.dates).format('DD-MM-YYYY')}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="font-semibold mr-3">Price:</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {course.price}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="font-semibold mr-3">Class Grade:</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {course.classGrade}
                  </div>
                </div>
                <Link to={'https://localhost:3003/r/111111'}>
                <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Participate To conference
            </button>
                </Link>
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

export default MyCourses;
