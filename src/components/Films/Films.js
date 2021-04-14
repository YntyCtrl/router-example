import {  Route } from "react-router";
import FilmList from "./FilmList/FilmList";



import FullFilm from "./FullFilm/FullFilm";

const Films = ({ match }) => {





  return (
    <div>
      {match.isExact ? (
        <FilmList />
      ) : (
        <Route path="/films/:id" component={FullFilm} />
      )}
    </div>
  );
};

export default Films;
