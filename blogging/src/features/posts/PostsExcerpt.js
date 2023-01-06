import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
    return (
        <article>
            <h2 className="bhead">
                {post.title}
            </h2>
            <p className="excerpt">
                {post.body.substring(0, 75)}...
            </p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>
                    View Blog
                </Link>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post}/>
        </article>
    )
}

export default PostsExcerpt;