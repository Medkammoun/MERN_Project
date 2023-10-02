import React from 'react';
import { Link } from 'react-router-dom';
import dashteacher from '../../assets/tracherPhotos/dashteacher.jpg'
import { IoEyeOutline } from 'react-icons/io5';


const Middleprof = () => {
  return (
    <div
    className="w-full h-screen bg-cover bg-center"
    style={{
      backgroundImage: `url(${dashteacher})`,
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
      <Link
        to={'/createcourse'}
        type='button'
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-20"
      >
        
        Create Course      </Link>

      <Link
        to={'/enrollements'}
        type='button'
        className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded my-20"
      >
        ShowAppointments
      </Link>

      <Link
        to={'/showcourses'}
        type='button'
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-20"
      >
        See all my courses
      </Link>
    </div>
    </div>
  );
};

export default Middleprof;
