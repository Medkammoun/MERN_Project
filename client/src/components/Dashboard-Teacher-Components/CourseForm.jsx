import React, { useState } from 'react';
import dashteacher from '../../assets/tracherPhotos/dashteacher.jpg';
import Teacher1 from '../../assets/tracherPhotos/Teacher1.png';
import { useNavigate } from 'react-router-dom';

const CreateCourseForm = ({ formHandler, setCourse, course }) => {
  const [previewCourse, setPreviewCourse] = useState({
    title: '',
    dates: '',
    price: '',
    classGrade: 'Sixième',
  });

  const updatePreview = () => {
    setPreviewCourse({
      title: course.title || 'Course Title',
      dates: course.dates || 'Date and Time',
      price: course.price || 'Price',
      classGrade: course.classGrade || 'Class Grade',
    });
  };

  const navigate = useNavigate();

  // Function to check if a date is in the past
  const isDateInPast = (dateTime) => {
    const selectedDateTime = new Date(dateTime).getTime();
    const currentDateTime = Date.now();
    return selectedDateTime < currentDateTime;
  };

  // Function to apply inline styles for past dates and dates before today
  const getCalendarInputStyle = (dateTime) => {
    const style = {
      // Common styles for the input
      backgroundColor: 'white',
      border: '1px solid #ccc',
      color: '#333',
      fontSize: '1rem',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      transition: 'border-color 0.2s ease-in-out',
    };

    // Check if the date is in the past
    if (isDateInPast(dateTime)) {
      // Apply different styles for past dates
      style.backgroundColor = '#f2f2f2'; // Light gray background color
      style.border = '1px solid #ddd'; // Light gray border color
      style.color = '#888'; // Gray text color
    }

    // Check if the date is before today
    const selectedDateTime = new Date(dateTime).getTime();
    const currentDateTime = Date.now();
    if (selectedDateTime < currentDateTime) {
      style.backgroundColor = '#f2f2f2'; // Light gray background color
    }

    return style;
  };

  return (
    <section
      className="bg-gray-50 dark:bg-gray-900  "
      style={{
        backgroundImage: `url(${dashteacher})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-around px-6 py-8 mx-auto md:h-screen lg:py-0 relative">
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <img
              src={Teacher1}
              alt="Teacher"
              className="w-16 h-16 rounded-full border border-white"
            />
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a Course
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => formHandler(e, course)}
              onChange={updatePreview}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  onChange={(e) =>
                    setCourse({
                      ...course,
                      title: e.target.value,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Course Title"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Date(s)
                </label>
                <input
                  type="datetime-local"
                  className="datetime-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Date and Time"
                  onChange={(e) => {
                    const selectedDateTime = new Date(e.target.value).getTime();
                    const currentDateTime = Date.now();

                    if (selectedDateTime > currentDateTime) {
                      setCourse({
                        ...course,
                        dates: e.target.value,
                      });
                    } else {
                      alert('Please select a date and time in the future');
                    }
                  }}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  style={getCalendarInputStyle(course.dates)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Price
                </label>
                <input
                  type="number"
                  onChange={(e) =>
                    setCourse({
                      ...course,
                      price: e.target.value,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Price"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Class Grade
                </label>
                <select
                  onChange={(e) => {
                    setCourse({
                      ...course,
                      classGrade: e.target.value,
                    });
                    updatePreview();
                  }}
                  value={course.classGrade}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                >
                  <option value="Sixième">Sixième</option>
                  <option value="Cinquième">Cinquième</option>
                  <option value="Quatrième">Quatrième</option>
                  <option value="Troisième">Troisième</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Create Course
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-4 md:mt-0 relative">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <img
              src={Teacher1}
              alt="Teacher"
              className="w-16 h-16 rounded-full border border-white"
            />
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {previewCourse.title}
            </h1>
            <div>
              <p className="text-gray-900 dark:text-white">
                <strong>Date(s):</strong> {previewCourse.dates}
              </p>
              <p className="text-gray-900 dark:text-white">
                <strong>Price:</strong> {previewCourse.price}
              </p>
              <p className="text-gray-900 dark:text-white">
                <strong>Class Grade:</strong> {previewCourse.classGrade}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateCourseForm;
