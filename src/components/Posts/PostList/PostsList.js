import classes from "./PostsList.module.css";
import { Link } from "react-router-dom";


const PostsList = () => {


    const Posts = [
       "",
      "Post1",
      "Post2",
      "Post3",
      "Post4",
      "Post5",
      "Post6",
      "Post7",
      "Post8",
      "Post9",
      "Post10",
    ];










    const results = [];
    for(let i = 1; i <= 10; i++){
        results.push(
          <li className={classes.li}>
            <Link className={classes.postLink} to={"/posts/" + i}>
              {Posts[i]}
            </Link>
          </li>
        );
    }



    return ( 
        <div>
            <ul className={classes.PostsList}>
                {results}
            </ul>
             
            
        </div>
     );
}
 
export default PostsList;