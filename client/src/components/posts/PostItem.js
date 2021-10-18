import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
    <div className="lg:flex justify-center items-center">
      <Card sx={{ minWidth: 275 }} className="m-4 lg:w-7/12 border-2">
        <CardContent>
          <div className="">
            {showActions && (
              <Fragment>
                <div className="flex justify-end">
                  {!auth.loading && user === auth.user._id && (
                    <button
                      onClick={(e) => deletePost(_id)}
                      type="button"
                      className="text-white bg-red-500 rounded text-xs p-1"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </Fragment>
            )}
            <Link to={`/profile/${user}`} className="flex justify-center">
              <Avatar
                alt="Remy Sharp"
                src={avatar}
                sx={{ width: 76, height: 76 }}
                className="border-2"
              />
            </Link>
            <Link to={`/profile/${user}`}>
              <div className="mt-2 text-center">{name}</div>
            </Link>
            <div className="bg-gray-200 m-2 p-2 rounded">
              {text}
              <div className="mt-4 italic text-sm">
                Posted on <Moment format="YYYY-MM-DD HH:mm">{date}</Moment>
              </div>
            </div>
            <div>
              <span className="m-2">
                {likes.length > 0 && <span>{likes.length} Likes</span>}
              </span>
            </div>
          </div>
          {showActions && (
            <Fragment>
              <div className="flex justify-center items-center m-4">
                <button
                  onClick={(e) => addLike(_id)}
                  type="button"
                  className="flex justify-center items-center bg-gray-200 rounded m-2 p-1"
                >
                  <FaThumbsUp className="w-12" />
                </button>
                <button
                  onClick={(e) => removeLike(_id)}
                  type="button"
                  className="bg-gray-200 rounded m-2"
                >
                  <FaThumbsDown className="w-12 m-1" />
                  <span></span>
                </button>
                <Badge badgeContent={comments.length} color="secondary">
                  <Link
                    to={`/posts/${_id}`}
                    className="bg-blue-300 rounded m-2 text-xs p-1"
                  >
                    Discussion
                  </Link>
                </Badge>
              </div>
            </Fragment>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
