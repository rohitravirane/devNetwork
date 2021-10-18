import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MainAlert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  // eslint-disable-next-line array-callback-return
  alerts.map((alert) => {
    // <div key={alert.id} className={`alert alert-${alert.alertType}`}>
    //   {alert.msg}
    // </div>;
    <div key={alert.id}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity={`${alert.alertType}`}>{alert.msg}</Alert>
      </Stack>
    </div>;
  });

MainAlert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(MainAlert);
