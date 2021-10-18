import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteExperience } from "../../actions/profile";

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td
        className="text-sm"
        style={{ border: "1px solid green", padding: "4px" }}
      >
        {exp.company}
      </td>
      <td
        className="hide-sm text-sm"
        style={{ border: "1px solid green", padding: "4px" }}
      >
        {exp.title}
      </td>
      <td
        className="text-sm"
        style={{ border: "1px solid green", padding: "4px" }}
      >
        <Moment format="MMMM YYYY">{exp.from}</Moment>
        <span className="font-bold"> - </span>{" "}
        {exp.to === null ? (
          " Now"
        ) : (
          <Moment format="MMMM YYYY">{exp.to}</Moment>
        )}
      </td>
      <td
        className="deleteBtn"
        style={{ border: "1px solid green", padding: "4px" }}
      >
        <button onClick={() => deleteExperience(exp._id)} className="bg-red-400 text-white text-sm p-1 rounded">
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h1 className="mt-6 text-xl text-center">Experience</h1>
      <div className="mt-2 flex justify-center items-center">
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
                Company
              </th>
              <th
                className="bg-green-600 text-white text-sm"
                style={{ border: "1px solid green", padding: "4px" }}
              >
                Title
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
                Delete Experience
              </th>
            </tr>
          </thead>
          <tbody>{experiences}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

Experience.propTypes = {
    experience: PropTypes.string.isRequired,
    deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
