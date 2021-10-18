import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import {
  SiTwitter,
  SiFacebook,
  SiLinkedin,
  SiYoutube,
  SiInstagram,
} from "react-icons/si";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./CreateProfile.css";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(","),
      githubusername:
        loading || !profile.githubusername ? "" : profile.githubusername,
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.twitter ? "" : profile.twitter,
      facebook: loading || !profile.facebook ? "" : profile.facebook,
      linkedin: loading || !profile.linkedin ? "" : profile.linkedin,
      youtube: loading || !profile.youtube ? "" : profile.youtube,
      instagram: loading || !profile.instagram ? "" : profile.instagram,
    });
  }, [loading, getCurrentProfile, profile.company, profile.website, profile.location, profile.status, profile.skills, profile.githubusername, profile.bio, profile.twitter, profile.facebook, profile.linkedin, profile.youtube, profile.instagram]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) => setFormData({ ...formData, company: e.target.value });
  const onChange1 = (e) =>
    setFormData({ ...formData, website: e.target.value });
  const onChange2 = (e) =>
    setFormData({ ...formData, location: e.target.value });
  const onChange3 = (e) => setFormData({ ...formData, status: e.target.value });
  const onChange4 = (e) => setFormData({ ...formData, skills: e.target.value });
  const onChange5 = (e) =>
    setFormData({ ...formData, githubusername: e.target.value });
  const onChange6 = (e) => setFormData({ ...formData, bio: e.target.value });
  const onChange7 = (e) =>
    setFormData({ ...formData, twitter: e.target.value });
  const onChange8 = (e) =>
    setFormData({ ...formData, facebook: e.target.value });
  const onChange9 = (e) =>
    setFormData({ ...formData, linkedin: e.target.value });
  const onChange10 = (e) =>
    setFormData({ ...formData, youtube: e.target.value });
  const onChange11 = (e) =>
    setFormData({ ...formData, instagram: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <div className="profile-form">
      <div className="pt-3 text-3xl font-medium text-center">
        Create Your Profile
      </div>
      <div className="m-6">
        <form className="mt-5" onSubmit={(e) => onSubmit(e)}>
          <Box className="max-w-md mx-auto md:max-w-2xl">
            <FormControl fullWidth>
              <InputLabel
                size="small"
                id="demo-simple-select-label"
                required="true"
              >
                I'm a
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="I Am a"
                onChange={(e) => onChange3(e)}
                size="small"
                style={{ width: "100%", background: "white" }}
              >
                <MenuItem value="Software Developer">
                  Software Developer
                </MenuItem>
                <MenuItem value="Senior Software Developer">
                  Senior Software Developer
                </MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Data Scientist">Data Scientist</MenuItem>
                <MenuItem value="Network Engineer">Network Engineer</MenuItem>
                <MenuItem value="Web Designer">Web Designer</MenuItem>
              </Select>
            </FormControl>
            <TextField
              sx={{ width: "100%", marginTop: 2, background: "white" }}
              id="outlined-basic"
              className=""
              value={company}
              onChange={(e) => onChange(e)}
              label="Company"
              variant="outlined"
              size="small"
            />
            <TextField
              sx={{ width: "100%", marginTop: 2, background: "white" }}
              id="outlined-basic"
              value={website}
              onChange={(e) => onChange1(e)}
              label="Website"
              variant="outlined"
              size="small"
            />
            <TextField
              sx={{ width: "100%", marginTop: 2, background: "white" }}
              id="outlined-basic"
              value={location}
              onChange={(e) => onChange2(e)}
              label="Location"
              variant="outlined"
              size="small"
            />
            <TextField
              sx={{ width: "100%", marginTop: 2, background: "white" }}
              id="outlined-basic"
              value={skills}
              onChange={(e) => onChange4(e)}
              label="Skills"
              variant="outlined"
              size="small"
              required="true"
            />
            <p style={{ fontSize: "11px" }}>
              Please use comma separated values (eg. HTML, CSS, ReactJS, Python)
            </p>
            <TextField
              sx={{ width: "100%", marginTop: 2, background: "white" }}
              id="outlined-basic"
              value={githubusername}
              onChange={(e) => onChange5(e)}
              label="Github Username"
              variant="outlined"
              size="small"
            />
            <TextareaAutosize
              sx={{ background: "white" }}
              className="rounded"
              value={bio}
              onChange={(e) => onChange6(e)}
              aria-label="minimum height"
              minRows={3}
              placeholder="A Short Bio of Yourself"
              style={{ width: "100%", marginTop: "20px", padding: "14px" }}
            />
            <div className="mt-4 mb-8 p-4 bg-blue-100 rounded text-blue-500">
              <h2 className="text-lg mt-2 text-center">Social Links</h2>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginTop: "4px",
                }}
              >
                <SiTwitter
                  style={{
                    color: "#00acee",
                    marginLeft: "10px",
                    marginRight: "10px",
                    height: "30px",
                    width: "23px",
                  }}
                />
                <TextField
                  id="input-with-sx"
                  style={{ width: "100%" }}
                  label="Twitter URL"
                  variant="standard"
                  size="small"
                  value={twitter}
                  onChange={(e) => onChange7(e)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginTop: "11px",
                }}
              >
                <SiFacebook
                  style={{
                    color: "#4267B2",
                    marginLeft: "10px",
                    marginRight: "10px",
                    height: "30px",
                    width: "23px",
                  }}
                />
                <TextField
                  id="input-with-sx"
                  style={{ width: "100%" }}
                  label="Facebook URL"
                  variant="standard"
                  size="small"
                  value={facebook}
                  onChange={(e) => onChange8(e)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginTop: "11px",
                }}
              >
                <SiLinkedin
                  style={{
                    color: "#0e76a8",
                    marginLeft: "10px",
                    marginRight: "10px",
                    height: "30px",
                    width: "23px",
                  }}
                />
                <TextField
                  id="input-with-sx"
                  style={{ width: "100%" }}
                  label="LinkedIn URL"
                  variant="standard"
                  size="small"
                  value={linkedin}
                  onChange={(e) => onChange9(e)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginTop: "11px",
                }}
              >
                <SiYoutube
                  style={{
                    color: "red",
                    marginLeft: "10px",
                    marginRight: "10px",
                    height: "30px",
                    width: "23px",
                  }}
                />
                <TextField
                  id="input-with-sx"
                  style={{ width: "100%" }}
                  label="Youtube URL"
                  variant="standard"
                  size="small"
                  value={youtube}
                  onChange={(e) => onChange10(e)}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  marginTop: "11px",
                  marginBottom: "30px",
                }}
              >
                <SiInstagram
                  style={{
                    color: "#8a3ab9",
                    marginLeft: "10px",
                    marginRight: "10px",
                    height: "30px",
                    width: "23px",
                  }}
                />
                <TextField
                  id="input-with-sx"
                  style={{ width: "100%" }}
                  label="Instagram URL"
                  variant="standard"
                  size="small"
                  value={instagram}
                  onChange={(e) => onChange11(e)}
                />
              </Box>
            </div>
            <div className="flex justify-around">
              <Button
                type="submit"
                variant="contained"
                style={{ textTransform: "none" }}
              >
                Submit
              </Button>
              <Link to="/dashboard">
                <Button
                  style={{
                    textTransform: "none",
                    backgroundColor: "#C0C0C0",
                    color: "black",
                  }}
                >
                  Go Back
                </Button>
              </Link>
            </div>
          </Box>
        </form>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
