import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Characters({ id, thumbnail, name, modified, series }) {
  return (
    <Link to={`/character/${id}`} key={id} style={{ textDecoration: "none" }}>
      <div className="card" key={id}>
        <div className="img-container">
          <img
            className="imgList"
            src={thumbnail.path + "." + thumbnail.extension}
          />
        </div>
        <div className="name-box">
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  );
}

Characters.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  series: PropTypes.object.isRequired,
};

export default Characters;
