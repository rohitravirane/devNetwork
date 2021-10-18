import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import Spinner from "../layout/Spinner";
import { getGithubRepos } from "../../actions/profile";

const GithubRepos = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div>
      {repos.length > 0 ? (
        repos.map((repo) => (
          <div
            className="lg:flex justify-between m-2 p-2 bg-white rounded"
            key={repo.id}
          >
            <div className="text-left text-lg">
              <h4 className="font-medium text-blue-600">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h4>
              <div className="text-gray-400 text-sm">{repo.description}</div>
            </div>
            <div className="ml-4 mr-4 w-32 text-xs">
              <ul className="flex justify-center">
                <li className="bg-blue-300 m-1 p-1 rounded">
                  Stars: {repo.stargazers_count}
                </li>
                <li className="bg-black text-white m-1 p-1 rounded">
                  Watchers: {repo.watchers_count}
                </li>
                <li className="bg-gray-300 m-1 p-1 rounded">
                  Forks: {repo.forks_count}
                </li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <div>No Repos Found</div>
      )}
    </div>
  );
};

GithubRepos.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(GithubRepos);
