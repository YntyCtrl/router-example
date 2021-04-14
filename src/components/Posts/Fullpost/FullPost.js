import classes from "./FullPosts.module.css";
import { Link } from "react-router-dom";

const FullPosts = ({ match }) => {
  return (
    <div className={classes.FullPosts}>
      <div className={classes.main}>
        <Link to="/posts">Back</Link>
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

export default FullPosts;
