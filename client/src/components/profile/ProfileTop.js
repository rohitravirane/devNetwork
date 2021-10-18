import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import {
  FaGlobe,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Moment from "react-moment";
// import PropTypes from "prop-types";
import GithubRepos from "./GithubRepos";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    bio,
    skills,
    experience,
    education,
    githubusername,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div className="flex justify-center items-center">
            <Avatar
              className="border"
              alt={name}
              src={avatar}
              sx={{ width: 150, height: 150 }}
            />
          </div>
          <div className="mt-2 text-3xl">{name}</div>
          <div className="text-xl">{location && <span>{location}</span>}</div>
          <div className="text-lg">
            {status} {company && <span>at {company}</span>}
          </div>
          <div className="grid gap-1 grid-cols-1 lg:grid-cols-1">
            <div className="flex justify-center items-center">
              <Paper
                sx={{ backgroundColor: "#f5f5f5" }}
                className="border text-sm text-center w-96 height-auto m-2 p-2"
              >
                <div className="flex justify-center font-bold text-lg">Bio</div>
                {bio}
              </Paper>
            </div>
            <div className="flex justify-center items-center">
              <Paper
                sx={{ backgroundColor: "#f5f5f5" }}
                className="border text-sm text-center w-11/12 height-auto m-2 p-2"
              >
                <div className="flex justify-center font-bold text-lg">
                  Skills
                </div>
                <ul className="grid gap-1 lg:grid-cols-8 grid-cols-2">
                  {skills.map((skill, item) => (
                    <li
                      className="bg-gray-600 text-white m-2 p-1 rounded text-xs"
                      key={item}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Paper>
            </div>
            <div className="flex justify-center items-center">
              <Paper
                sx={{ backgroundColor: "#f5f5f5" }}
                className="border text-sm w-11/12 height-auto m-2 p-2"
              >
                <div className="flex justify-center font-bold text-lg">
                  Experience
                </div>
                <div>
                  {experience.length > 0 ? (
                    <div>
                      {experience.map((ex, index) => (
                        <ul key={ex._id}>
                          <li>
                            <ul>
                              <div
                                key={ex._id}
                                className="bg-white m-2 p-2 rounded border text-left"
                              >
                                <div className="lg:flex justify-between">
                                  <li className="text-lg font-medium">
                                    {ex.company}
                                  </li>
                                  <li className="italic text-gray-500">
                                    <Moment format="MMMM YYYY">
                                      {ex.from}
                                    </Moment>
                                    <span className="font-bold"> - </span>{" "}
                                    {ex.to === null ? (
                                      " Now"
                                    ) : (
                                      <Moment format="MMMM YYYY">
                                        {ex.to}
                                      </Moment>
                                    )}
                                  </li>
                                </div>
                                <div className="lg:flex justify-between">
                                  <li className="font-normal">{ex.title}</li>
                                  <li className="italic text-gray-500">
                                    {ex.location}
                                  </li>
                                </div>
                                <div className="mt-2">
                                  <hr className="border-2" />
                                </div>
                                <div className="mt-2 text-sm text-gray-500">
                                  {ex.description}
                                </div>
                              </div>
                            </ul>
                          </li>
                        </ul>
                      ))}
                    </div>
                  ) : (
                    <div>No Experience</div>
                  )}
                </div>
              </Paper>
            </div>
            <div className="flex justify-center items-center">
              <Paper
                sx={{ backgroundColor: "#f5f5f5" }}
                className="border text-sm w-11/12 height-auto m-2 p-2"
              >
                <div className="flex justify-center font-bold text-lg">
                  Education
                </div>
                <div>
                  {education.length > 0 ? (
                    <div>
                      {education.map((ed, index) => (
                        <ul key={ed._id}>
                          <li>
                            <ul>
                              <div
                                key={ed._id}
                                className="bg-white m-2 p-2 rounded border text-left"
                              >
                                <div className="lg:flex justify-between">
                                  <li className="text-lg font-medium">
                                    {ed.school}
                                  </li>
                                  <li className="italic text-gray-500">
                                    <Moment format="MMMM YYYY">
                                      {ed.from}
                                    </Moment>
                                    <span className="font-bold"> - </span>{" "}
                                    {ed.to === null ? (
                                      " Now"
                                    ) : (
                                      <Moment format="MMMM YYYY">
                                        {ed.to}
                                      </Moment>
                                    )}
                                  </li>
                                </div>
                                <li className="font-normal">
                                  {ed.degree}, {ed.fieldofstudy}
                                </li>
                                <div className="mt-2">
                                  <hr className="border-2" />
                                </div>
                                <div className="mt-2 text-sm text-gray-500">
                                  {ed.description}
                                </div>
                              </div>
                            </ul>
                          </li>
                        </ul>
                      ))}
                    </div>
                  ) : (
                    <div>No Education</div>
                  )}
                </div>
              </Paper>
            </div>
            <div className="flex justify-center items-center">
              <Paper
                sx={{ backgroundColor: "#f5f5f5" }}
                className="border text-sm w-11/12 height-auto m-2 p-2"
              >
                <div className="flex justify-center font-bold text-lg">
                  Github Repositories
                </div>
                <GithubRepos username={githubusername} />
              </Paper>
            </div>
          </div>

          <div className="flex justify-center items-center">
            {website && (
              <a
                href={website}
                target="_blank"
                className="m-1 p-2 text-2xl"
                rel="noopener noreferrer"
              >
                <FaGlobe />
              </a>
            )}
            {social && social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                className="m-1 p-2 text-2xl"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            )}
            {social && social.facebook && (
              <a
                href={social.facebook}
                target="_blank"
                className="m-1 p-2 text-2xl"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            )}
            {social && social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                className="m-1 p-2 text-2xl"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            )}
            {social && social.youtube && (
              <a
                href={social.youtube}
                target="_blank"
                className="m-1 p-2 text-2xl"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            )}
            {social && social.instagram && (
              <a
                href={social.instagram}
                target="_blank"
                className="m-1 p-2 text-2xl"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// ProfileTop.propTypes = {};

export default ProfileTop;
