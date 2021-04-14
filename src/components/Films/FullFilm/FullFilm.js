import classes from "./FullFilm.module.css";
import { Link } from "react-router-dom";

const FullFilm = ({ match }) => {
  return (
    <div className={classes.FullFilm}>
      <div className={classes.main}>
        <Link to="/films">Back</Link>
        <h1>Post {match.params.id}</h1>
      </div>
      <div className={classes.info}>
        <h2>Welcome to down town velley</h2>
        <p>
          Today is good day to write some stupid and nonsense text to fill
          paragraph instead of copyion from google
        </p>
      </div>
    </div>
  );
};

export default FullFilm;
