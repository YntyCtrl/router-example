import { Link } from "react-router-dom";


const FilmList = () => {
  const results = [];
  for (let i = 1; i <= 5; i++) {
    results.push(
      <li>
        <Link to={"/films/" + i}>{i} Film</Link>
      </li>
    );
  }

  return (
    <div>
      <ul>{results}</ul>
    </div>
  );
};
 
export default FilmList;