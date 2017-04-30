import React, { Component } from 'react';
import './course-item.css';


const CourseItem = ({ course }) => {
  console.log(course);
  return (
    <div className="course">
      <div className="course-photo">
      </div>
      <div className="course-description">
        <span className="course-label">description:</span>
        <span className="course-info">{course.description}</span>
        <span className="course-info">{course.duration}</span>
        <span className="course-label">price:</span>
        <span className="course-info">{course.price}</span>
      </div>
    </div>
  );
};

export default CourseItem;
