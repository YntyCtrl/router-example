import { Link } from "react-router-dom";


const PostsList = () => {
    const results = [];
    for(let i = 1; i <= 5; i++){
        results.push(<li><Link to={"/posts/" + i} >Post number</Link></li>)
    }



    return ( 
        <div>
            <ul>
                {results}
            </ul>
             
            
        </div>
     );
}
 
export default PostsList;