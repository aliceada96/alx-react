import React from "react";
import PropTypes from "prop-types";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  let tr = undefined;
  if (isHeader === true) {
    tr = <th colSpan={2}>{textFirstCell}</th>
  } else {
    tr = (
      <>
        <th>{textFirstCell}</th>
        <th>{textSecondCell}</th>
      </>
      );
      }

  if (isHeader === false) {
    tr = (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
    )
  }
  return (
    <tr>
      {tr}
    </tr>
  )
  };
  

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;