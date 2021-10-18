import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../auth/Login';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <div>
      <Login />
    </div>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
