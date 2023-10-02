import React, { useState } from 'react';
import '../../styles.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Teacher2 from '../../assets/tracherPhotos/Teacher2.png'
import logo from '../../../public/img/Thelogo.png'
const NavDashboardTeacher = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const Logout = (e)=>{
    e.preventDefault()
    
    axios.post("http://localhost:8000/api/teacher/logout",{},{withCredentials:true})
    .then(serverResponse => {
        console.log(serverResponse);
        
      navigate('/')
      
    })

    .catch(error=> {
        console.log(error)
    })


}
  return (
    <>
      <nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to={'/'}>
            <div className="flex items-center">
              <img src={logo} className="max-h-20"/>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Scholars Link</span>
            </div>
          </Link>
          <div className="flex md:order-2">
            <Link to={'/teacher'}>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className=" rounded-full p-2 h-16 w-16 flex items-center justify-center hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <img
                    src={Teacher2}
                    className="h-12 w-12 rounded-full border-4 border-solid"
                    alt="User Profile"
                  />
                </button>
                {showDropdown && (
                  <div className="absolute mt-2 right-0 bg-white border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
                    <ul className="text-gray-800 dark:text-white px-4 py-2">
                      <li>
                        <Link to={"/settingteacher"} className="block py-2 hover:bg-gray-100">
                          Settings
                        </Link>
                      </li>
                      <li>
                      <button
                className="block py-2 hover:bg-gray-100"
                onClick={Logout}
              >
                Logout
              </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={'/teacher'}
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={'/createcourse'}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 md:dark:hover-text-blue-500 dark-text-white dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700"
                >
                 New Course
                </Link>
              </li>
              <li>
                <Link
                  to={'/teacher'}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 md:dark:hover-text-blue-500 dark-text-white dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700"
                >
                  My Courses
                </Link>
              </li>
              <li>
                <Link
                  to={'/teacher'}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md:hover-bg-transparent md:hover-text-blue-700 md:p-0 md:dark:hover-text-blue-500 dark-text-white dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700"
                >
                  History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavDashboardTeacher;
