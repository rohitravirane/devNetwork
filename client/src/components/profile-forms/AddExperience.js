import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Box,
  TextField,
  TextareaAutosize,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) => setFormData({ ...formData, company: e.target.value });
  const onChange1 = (e) => setFormData({ ...formData, title: e.target.value });
  const onChange2 = (e) =>
    setFormData({ ...formData, location: e.target.value });
  const onChange3 = (e) => setFormData({ ...formData, from: e });
  const onChange4 = (e) => setFormData({ ...formData, to: e });
  const onChange6 = (e) =>
    setFormData({ ...formData, description: e.target.value });


  return (
    <div className="addExperience mt-4">
      <div className="text-3xl font-medium text-center">Add An Experience</div>
      <div className="m-6">
        <form
          className="mt-5"
          onSubmit={(e) => {
            e.preventDefault();
            addExperience(formData, history);
          }}
        >
          <Box className="max-w-md mx-auto md:max-w-2xl">
            <TextField
              sx={{ width: "100%", marginTop: 2, background: "white" }}
              id="outlined-basic"
              className=""
              value={title}
              onChange={(e) => onChange1(e)}
              label="Job Title"
              variant="outlined"
              size="small"
              required={true}
            />
            <TextField
              sx={{ width: "100%", marginTop: 2, background: "white" }}
              id="outlined-basic"
              value={company}
              onChange={(e) => onChange(e)}
              label="Company"
              variant="outlined"
              size="small"
              required={true}
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
            <div className="mt-4">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <MobileDatePicker
                    label="From Date"
                    inputFormat="MM/dd/yyyy"
                    value={from}
                    onChange={(e) => onChange3(e)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </div>
            <div className="mt-4">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Current Job"
                  value={current}
                  onChange={(e) => {
                    setFormData({ ...formData, current: !current });
                    toggleDisabled(!toDateDisabled);
                  }}
                />
              </FormGroup>
            </div>
            <div className="mt-4">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <MobileDatePicker
                    label="To Date"
                    inputFormat="MM/dd/yyyy"
                    value={to}
                    onChange={(e) => onChange4(e)}
                    renderInput={(params) => <TextField {...params} />}
                    disabled={toDateDisabled ? "disabled" : ""}
                  />
                </Stack>
              </LocalizationProvider>
            </div>

            <TextareaAutosize
              sx={{ background: "white" }}
              className="rounded"
              value={description}
              onChange={(e) => onChange6(e)}
              aria-label="minimum height"
              minRows={3}
              placeholder="Job Description"
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "14px",
                backgroundColor: "#f6f8ff",
              }}
            />
            <div className="mt-4 flex justify-around">
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
