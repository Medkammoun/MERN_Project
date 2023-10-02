import React from 'react';
import './ImageLink.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import dashteacher from '/public/img/dashteacher.avif';

function ImageLink() {
  return (
    <div className="w-full h-500px bg-cover bg-center pt-16" style={{ backgroundImage: 'url(/img/dashteacher.avif)' }}>
    <div className="justify-center h-screen">
      <div className="flex justify-center mt-4 mb-4">
        <div className="flex flex-wrap -mx-4">
          {/* First Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-4">
            <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={'/math'} href="#">
                <img className="rounded-t-lg w-full h-64" src="/img/math.avif" alt="" />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Math</h5>
                </a>
                <Link to={'/math'} href="#" className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go Course
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-4">
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={'/mern'} href="#">
                <img className="rounded-t-lg w-full h-64" src="../../../public/img/mern.gif" alt="" />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">MERN</h5>
                </a>
                <Link to={'mern'} href="#" className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go Course
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-4">
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={'/physics'} href="#">
                <img className="rounded-t-lg w-full h-64" src="../../../public/img/physics.jpg" alt="" />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Physics</h5>
                </a>
                <Link to={'/physics'} href="#" className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go Course
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>


            
          {/* Add more cards as needed */}
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <div className="flex flex-wrap -mx-4">
          {/* First Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-4">
            <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={'/geography'} href="#">
                <img className="rounded-t-lg w-full h-64" src="img/geography.webp" alt="" />
              </Link>
              <div className="p-5">
                <Link to={'/geography'} href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Geography</h5>
                </Link>
                <a href="#" className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go Course
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-4">
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={'/history'} href="#">
                <img className="rounded-t-lg w-full h-64" src="../../../public/img/history.webp" alt="" />
              </Link>
              <div className="p-5">
                <a  href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">History</h5>
                </a>
                <Link to={'/history'} href="#" className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go Course
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 px-4">
          <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to={'/chemistry'} href="#">
                <img className="rounded-t-lg w-full h-64" src="../../../public/img/chemistry.jpg" alt="" />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Chemistry</h5>
                </a>
                <Link to={'/chemistry'} href="#" className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Go Course
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ImageLink;