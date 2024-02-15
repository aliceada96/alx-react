import React from "react";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";
import Proptypes from "prop-types";
import CourseShape from "./CourseShape";

function CourseList({ coursesList }) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {coursesList.length > 0 ? (
          coursesList.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
}
CourseList.propTypes = {
  listCourses: Proptypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  coursesList: [],
};

export default CourseList;