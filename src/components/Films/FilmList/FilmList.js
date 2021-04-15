import classes from "./FilmList.module.css";
import { Link } from "react-router-dom";


const FilmList = ({film}) => {
  const results = [];
  for (let i = 1; i <= 12; i++) {
    results.push(
      <li>
        <Link className={classes.Link} to={"/films/" + i}>
          {film[i]}

        </Link>
      </li>
    );
  }

  return (
    <div>
      <ul >{results}</ul>
    </div>
  );
};
 
export default FilmList;