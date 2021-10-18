import React, { Fragment, useState, useEffect } from "react";
import { FaLaptopCode, FaSignOutAlt, FaChartArea } from "react-icons/fa";
// import { Menu, Dropdown, Button, Space } from "antd";
import DehazeIcon from "@material-ui/icons/Dehaze";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

function Navbar({ logo, auth: { isAuthenticated, loading }, logout }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const authLinks = (
    <div className="navList flex float-right items-center">
      <div className="text-base mt-1 mr-2 cursor-pointer">
        <Link
          style={{ fontSize: "12px" }}
          className="flex text-sm"
          to="/profiles"
        >
          <FaLaptopCode className="mr-1 mt-1" />
          Developers
        </Link>
      </div>
      <div className="text-base mt-1 mr-2 cursor-pointer">
        <Link style={{ fontSize: "12px" }} className="flex text-sm" to="/posts">
          <FaLaptopCode className="mr-1 mt-1" />
          Posts
        </Link>
      </div>
      <div className="text-base mt-1 mr-2 cursor-pointer">
        <Link
          style={{ fontSize: "12px" }}
          className="text-sm flex"
          to="/dashboard"
        >
          <FaChartArea className="mr-1 mt-0.5" />
          Dashboard
        </Link>
      </div>
      <div className="text-base mt-1 mr-2 cursor-pointer">
        <Link onClick={logout} to="#!">
          <span style={{ fontSize: "12px" }} className="hide-sm flex text-sm">
            <FaSignOutAlt className="mr-1 mt-1" />
            Logout
          </span>
        </Link>
      </div>
    </div>
  );

  const guestLinks = (
    <div className="navList flex float-right items-center">
      <div className="text-base mt-1 mr-2 cursor-pointer">
        <Link
          style={{ fontSize: "12px" }}
          className="flex text-sm"
          to="/profiles"
        >
          <FaLaptopCode className="mr-1 mt-1" />
          Developers
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flow-root items-center px-4 py-4 shadow-md bg-white">
      <div className="flex float-left items-center bg-blue-500 px-4 rounded-lg font-bold cursor-pointer">
        <div className="flex">
          <Link className="text-white" to="/">
            {logo}
          </Link>
        </div>
      </div>
      {!loading && (
        <Fragment>
          {isAuthenticated
            ? (activeMenu && authLinks) || (
                <Fragment>
                  <div className="flex justify-end">
                    <div className="sideBar">
                      <DehazeIcon className="sideIcon" onClick={handleClick} />
                    </div>
                    <Menu
                      id="simple-menu"
                      className="sideMenu mt-11"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem>
                        <Link to="/profiles">Developers</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/posts">Posts</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link to="/dashboard">Dashboard</Link>
                      </MenuItem>
                      <MenuItem>
                        <Link onClick={logout} to="#!">Logout</Link>
                      </MenuItem>
                    </Menu>
                  </div>
                </Fragment>
              )
            : guestLinks}
        </Fragment>
      )}
    </div>
  );
}

Navbar.defaultProps = {
  logo: "<DevNetwork />",
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
