import classes from "./FullFilm.module.css";
import { Link } from "react-router-dom";

const FullFilm = ({ match,film  }) => {
const results = [];
for (let i = 1; i <= 12; i++) {
  results.push(
    film[i]
  );
}


  return (
    <div className={classes.FullFilm}>
      <div className={classes.main}>
        <Link to="/films">Back</Link>
        <h1>{match.params.id} Film </h1>
      </div>
      <div className={classes.info}>
        <h2>{results}</h2>
        <p>
          Looding...
        </p>
      </div>
    </div>
  );
};

export default FullFilm;
