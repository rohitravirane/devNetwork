import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from './ProfileTop';
// import GithubRepos from './GithubRepos';
import { getProfileById } from "../../actions/profile";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <div className="text-center m-4">
          <Link
            to="/profiles"
            className="m-1 p-1 text-sm bg-blue-500 text-white rounded"
          >
            Back to Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link
                to="/edit-profile"
                className="m-1 p-1 text-sm bg-blue-500 text-white rounded"
              >
                Edit Profile
              </Link>
            )}
            <div className="mt-6">
              <ProfileTop profile={profile} />
            </div>
            {/* { profile.githubusername && (
              <GithubRepos username={profile.githubusername} />
            ) } */}
        </div>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
