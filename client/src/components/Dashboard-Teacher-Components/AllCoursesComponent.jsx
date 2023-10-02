import React, { useState } from 'react';
import dashteacher from '../../assets/tracherPhotos/dashteacher.jpg';
import Teacher1 from '../../assets/tracherPhotos/Teacher1.png';
import moment from 'moment';

const coursesPerPage = 6; // Number of courses to display per page

const AllCourses = ({ courses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterKey, setFilterKey] = useState('');
  const [sortCriteria, setSortCriteria] = useState('date'); // Default sorting by date
  const [sortOrder, setSortOrder] = useState('asc'); // Default ascending order

  // Calculate the start and end indices for the courses on the current page
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  // Filter and slice the courses to display on the current page
  const filteredCourses = courses.filter((el) =>
    el.title.toUpperCase().includes(filterKey.toUpperCase())
  );

  // Sort the courses based on the selected criteria and order
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortCriteria === 'date') {
      // Sort by date
      const dateA = new Date(a.dates);
      const dateB = new Date(b.dates);
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    } else if (sortCriteria === 'price') {
      // Sort by price
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    }
    return 0;
  });

  // Slice the sorted courses based on pagination
  const coursesToDisplay = sortedCourses.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(sortedCourses.length / coursesPerPage);

  // Function to handle page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Function to handle sorting change
  const handleSortChange = (criteria) => {
    if (criteria === sortCriteria) {
      // Toggle sorting order if the same criteria is selected
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Change sorting criteria and set default ascending order
      setSortCriteria(criteria);
      setSortOrder('asc');
    }
  };

  return (
    <section
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${dashteacher})`,
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center h-full">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-md w-full d:h-auto dark:bg-gray-800 dark:bg-opacity-80 dark:border dark:border-gray-700 p-8 md:p-12">
          <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
            All Courses
          </h1>
          <input
            placeholder="Find course"
            className="px-2 py-1 rounded-xl w-[40%] border-[1px] border-solid mb-6"
            onChange={(e) => setFilterKey(e.target.value)}
          />
          <div className="flex justify-between items-center mb-4">
            <div className="text-gray-600 dark:text-gray-300 font-semibold">
              Sort by:
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSortChange('date')}
                className={`${
                  sortCriteria === 'date' ? 'font-bold' : ''
                } cursor-pointer`}
              >
                Date
                {sortCriteria === 'date' && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </button>
              <button
                onClick={() => handleSortChange('price')}
                className={`${
                  sortCriteria === 'price' ? 'font-bold' : ''
                } cursor-pointer`}
              >
                Price
                {sortCriteria === 'price' && (
                  <span className="ml-1">
                    {sortOrder === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-around flex-wrap">
            {coursesToDisplay.map((course, index) => (
              <div
                key={course.id}
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
                <div className="flex flex-row">
                  <div className="font-semibold mr-3">Rank:</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {startIndex + index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination controls */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
            >
              Previous
            </button>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCourses;
