import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './courses.css';
import CourseItem from '../../components/course-item/course-item';
import { fetchCourses } from '../../actions/courses_actions';

class Courses extends Component {
  constructor(props) {
    super(props);
    this.props.fetchCourses();
  }

  renderItems() {
    return this.props.courses.map((course) => {
      return (
        <CourseItem key={course.id} course={course} />
      );
    });
  } 

  render() {
    return (
      <div className="courses">
        {this.renderItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCourses }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
