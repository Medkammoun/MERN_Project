import React from 'react';
import { Link } from 'react-router-dom';

const Choose = () => {
  return (
    <div className="flex justify-center items-center h-screen space-x-4 p-4">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Link to={'/registerteacher'}>
        
        <img className="rounded-t-lg w-full h-96" src="/public/img/Teacherrr.jpg" alt="" />
        </Link>
        <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mt-3">I'm a Teacher</button>
      </div>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <Link to={'/registerstudent'}>
        <img className="rounded-t-lg w-full h-96" src="/public/img/students.avif" alt="" />
        
        </Link>
        <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mt-3">I'm a Student</button>
      </div>
    </div>
  );
};

export default Choose;