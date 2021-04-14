import {  Route } from "react-router";
import FullPosts from "./FullFilm/FullFilm";

import PostsList from "./FilmList/FilmList";

const Films = ({ match }) => {
  return (
    <div>
      {match.isExact ? (
        <PostsList />
      ) : (
        <Route path="/films/:id" component={FullPosts} />
      )}
    </div>
  );
};

export default Films;
