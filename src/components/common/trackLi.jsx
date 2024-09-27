import "../../styles/trackLi.css";
import useTime from "../../hooks/useTime";
function TrackLi({ img, trackName, artistName, duration, chooseTrack, uri }) {
  return (
    <li onClick={() => chooseTrack(uri)} className="list-item">
      <div className="trackLi">
        <img src={img} alt={trackName} />
        <div className="trackLi-info">
          <span>{trackName}</span>
          <span>{artistName}</span>
        </div>
        <span>{useTime(duration)}</span>
      </div>
    </li>
  );
}

export default TrackLi;
