import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <Fragment>
      <Paper className="w-72 height-auto m-2">
        <div className="m-4 flex">
          <Stack direction="row" spacing={2}>
            <Avatar
              className=""
              alt={name}
              src={avatar}
              sx={{ width: 90, height: 90 }}
            />
          </Stack>
          <div className="ml-4">
            <div className="text-lg">{name}</div>
            <div className="text-xs">{location && <span>{location}</span>}</div>
            <div className="text-sm">
              {status} {company && <span>at {company}</span>}
            </div>
          </div>
        </div>
        <div className="m-4">
          <div className="text-xs font-bold">Skills:</div>
          <ul className="" style={{ marginLeft: "-4px" }}>
            <Grid container className="" justifyContent="left">
              {skills.slice(0, 5).map((skill, index) => (
                <li
                  style={{ whiteSpace: "nowrap" }}
                  className="text-xs p-1 m-1 bg-green-300 rounded text-gray-700"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </Grid>
          </ul>
        </div>
        <div className="flex justify-center mb-4">
          <Link to={`/profile/${_id}`} className="text-xs bg-gray-200 text-black p-1 rounded">
            View Profile
          </Link>
        </div>
      </Paper>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
