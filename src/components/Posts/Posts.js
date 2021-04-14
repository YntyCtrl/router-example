import {  Route } from "react-router";
import FullPosts from "./Fullpost/FullPost";

import PostsList from "./PostList/PostsList";

const Posts = ({ match }) => {
  return (
    <div>
      {match.isExact ? (
        <PostsList />
      ) : (
        <Route path="/posts/:id" component={FullPosts} />
      )}
    </div>
  );
};

export default Posts;
