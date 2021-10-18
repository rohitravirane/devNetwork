import React, { useEffect, Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const myStyle = {
    border: 'none',
    outline: 'none',
    padding: '8px',
    margin: '10px',
    borderRadius: '7px',
    fontSize: '11px',
    fontWeight: '500',
    color: 'white',
    backgroundColor: '#362a89'
  };

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <div className="mt-4">
      <div className="text-3xl font-medium text-center">Dashboard</div>
      <div className="mt-4 text-xl text-center">Welcome {user && user.name}</div>
      {profile !== null ? (
        <div className="text-center">
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />
          <div>
            <button onClick={() => deleteAccount()} className="bg-red-500 text-white p-2 rounded">Delete My Account</button>
          </div>
        </div>
      ) : (
        <Fragment>
            <Link className="flex justify-center items-center mt-2" to='/create-profile'><button style={myStyle}>Create Profile</button></Link>
        </Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
