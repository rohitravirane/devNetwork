import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import Grid from "@mui/material/Grid";
import { getProfiles } from "../../actions/profile";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <div>
      <h1 className="mt-4 mb-4 text-3xl font-medium text-center">Developers</h1>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Grid
            justifyContent="center"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem className="" key={profile._id} profile={profile} />
              ))
            ) : (
                <Spinner /> || <h4 className="mt-4 text-xl text-center">No Profiles Found...</h4>
            )}
          </Grid>
        </Fragment>
      )}
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
