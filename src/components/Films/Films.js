import classes from "./Films.module.css";
import {  Route } from "react-router";
import FilmList from "./FilmList/FilmList";



import FullFilm from "./FullFilm/FullFilm";

const Films = ({ match }) => {
const films = [
  "",
  <div className={classes.Film}>
    <div className={classes.Film1Img}></div>Wonder Women
  </div>,

  <div className={classes.Film}>
    <div className={classes.Film2Img}></div>Skyline 3
  </div>,
  <div className={classes.Film}>
    <div className={classes.Film3Img}></div>The Boss Baby
  </div>,
  <div className={classes.Film}>
    <div className={classes.Film4Img}></div>Monster Hunter
  </div>,
  <div className={classes.Film}>
    <div className={classes.Film5Img}></div>The Dry
  </div>,
  <div className={classes.Film}>
    <div className={classes.Film6Img}></div>Synchronic
  </div>,
  <div className={classes.Film}>
    <div className={classes.Film7Img}></div>Intuition
  </div>,
  <div className={classes.Film}>
    <div className={classes.Film8Img}></div>Titanic
  </div>,
  <div className={classes.Film}>
    <div className={classes.Film9Img}></div>The Proposal
  </div>,
  <div className={classes.Film}>
    <div className={classes.Film10Img}></div>Death Race
  </div>,
  <div className={classes.Film}>
    <div className={classes.Film11Img}></div>The Longest Ride
  </div>,
  <div className={classes.Film}>
    <div className={classes.Film12Img}></div>Passengers
  </div>,
];




  return (
    <div className={classes.Films}>
      {match.isExact ? (
        <FilmList film={films} />
      ) : (
        <Route film={films} path="/films/:id" component={FullFilm} />
      )}
    </div>
  );
};

export default Films;
