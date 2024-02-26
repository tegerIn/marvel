import PropTypes from "prop-types";

function DetailInfo({ id, thumbnail, name, series, comics, stories }) {
  return (
    <div className="detail-card" key={id}>
      <div className="name-box">
        <h2>{name}</h2>
      </div>
      <div className="info">
        <div className="img-container-info">
          <img src={thumbnail.path + "." + thumbnail.extension} />
        </div>
        <div className="content-container">
          <div>
            <h2>series</h2>
            <ul>
              {series.items.map((series, idx) => (
                <li key={idx}>{series.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>stories</h2>
            <ul>
              {stories.items.map((stories, idx) => (
                <li key={idx}>{stories.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>comics</h2>
            <ul>
              {comics.items.map((comics, idx) => (
                <li key={idx}>{comics.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

DetailInfo.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  modified: PropTypes.string.isRequired,
  series: PropTypes.object.isRequired,
};

export default DetailInfo;
