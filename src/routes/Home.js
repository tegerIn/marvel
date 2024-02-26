import { useState, useEffect } from "react";
import Characters from "../components/Characters";

function Home() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const getCharacters = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
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
          <h1>Marvel Characters</h1>
          <div className="container">
            {characters.map((charater) => (
              <Characters key={charater.id} {...charater} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
