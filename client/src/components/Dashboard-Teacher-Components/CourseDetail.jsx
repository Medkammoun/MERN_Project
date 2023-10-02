

import React from 'react';

const CourseDetail = ({ course }) => {
  return (
    <div>
      <h1>Course Details</h1>
      <h2>{course.title}</h2>
      {/* Display more course details here */}
    </div>
  );
};

export default CourseDetail;
