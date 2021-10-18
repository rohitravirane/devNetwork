import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteEducation } from "../../actions/profile";

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td
        className="text-sm"
        style={{ border: "1px solid green", padding: "4px" }}
      >
        {edu.school}
      </td>
      <td
        className="hide-sm text-sm"
        style={{ border: "1px solid green", padding: "4px" }}
      >
        {edu.degree}
      </td>
      <td
        className="text-sm"
        style={{ border: "1px solid green", padding: "4px" }}
      >
        <Moment format="MMMM YYYY">{edu.from}</Moment>
        <span className="font-bold"> - </span>{" "}
        {edu.to === null ? (
          " Now"
        ) : (
          <Moment format="MMMM YYYY">{edu.to}</Moment>
        )}
      </td>
      <td
        className="deleteBtn"
        style={{ border: "1px solid green", padding: "4px" }}
      >
        <button onClick={() => deleteEducation(edu._id)} className="bg-red-400 text-white text-sm p-1 rounded">
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h1 className="mt-6 text-xl text-center">Education</h1>
      <div className="mt-2 mb-10 flex justify-center items-center">
        <table
          className="table-fixed"
          style={{ width: "87%", border: "1px solid green", padding: "4px" }}
        >
          <thead>
            <tr style={{ border: "1px solid green", padding: "4px" }}>
              <th
                className="bg-green-600 text-white text-sm"
                style={{ border: "1px solid green", padding: "4px" }}
              >
                College
              </th>
              <th
                className="bg-green-600 text-white text-sm"
                style={{ border: "1px solid green", padding: "4px" }}
              >
                Degree
              </th>
              <th
                className="bg-green-600 text-white text-sm"
                style={{ border: "1px solid green", padding: "4px" }}
              >
                Years
              </th>
              <th
                className="bg-green-600 text-white text-sm"
                style={{ border: "1px solid green", padding: "4px" }}
              >
                Delete Education
              </th>
            </tr>
          </thead>
          <tbody>{educations}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

Education.propTypes = {
    education: PropTypes.func.isRequired,
    deleteEducation: PropTypes.func.isRequired
};

export default connect(null, {deleteEducation})(Education);
