import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { deleteComment } from "../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
  return (
    <div className="lg:flex justify-center items-center">
      <Card sx={{ minWidth: 275 }} className="m-4 lg:w-7/12 border-2">
        <CardContent>
          <div className="">
            <Fragment>
              <div className="flex justify-end">
                {!auth.loading && user === auth.user._id && (
                  <button
                    onClick={(e) => deleteComment(postId, _id)}
                    type="button"
                    className="text-white bg-red-500 rounded text-xs p-1"
                  >
                    Delete
                  </button>
                )}
              </div>
            </Fragment>
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
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
