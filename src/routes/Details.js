import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DetailInfo from "../components/DetailInfo";

function Details() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const id = useParams();
  const getCharacters = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id.id}`
      )
    ).json();
    setCharacters(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="main">
          <h1>Characters Detail</h1>
          <div className="container info">
            {characters.map((charater) => (
              <DetailInfo key={charater.id} {...charater} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Details;
