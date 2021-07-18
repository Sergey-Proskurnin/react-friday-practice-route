import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCastInfo } from "../services/fetchApi";

const Cast = () => {
  const history = useHistory();
  // console.log("cast", history);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastInfo(history.location.state.id).then((resp) =>
      setCast(resp.data.cast)
    );
  }, [history.location.state.id]);

  return (
    <>
      <h1>Cast</h1>
      <ul>
        {cast.length > 0 ? (
          cast.map(({ name, cast_id }) => <li key={cast_id}>{name}</li>)
        ) : (
          <li>Not found any cast</li>
        )}
      </ul>
    </>
  );
};

export default Cast;
