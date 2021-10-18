import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  const myStyle = {
    textTransform: "none",
    backgroundColor: "#B0E0E6",
    fontSize: "13px",
    marginRight: "10px",
    borderRadius: "7px",
    padding: "6px",
  };
  return (
    <div className="text-xs mt-3">
      <Link style={myStyle} to="edit-profile">Edit Profile</Link>
      <Link style={myStyle} to="add-experience">Add Experience</Link>
      <Link style={myStyle} to="add-education">Add Education</Link>
    </div>
  );
};

export default DashboardActions;
