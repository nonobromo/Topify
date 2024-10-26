import "../../styles/trackLi.css";
import useTime from "../../hooks/useTime";
import { useTrack } from "../../context/trackPlay.context";
function TrackLi({ img, trackName, artistName, duration, uri, trackAlbum }) {
  const { chooseTrack } = useTrack();

  return (
    <li onClick={() => chooseTrack(uri)} className="list-item">
      <div className="trackLi">
        <img src={img} alt={trackName} />
        <div className="trackLi-info">
          <span className="track-name">{trackName}</span>
          <span className="artist-name">{artistName}</span>
        </div>
        <span className="hide-item">{useTime(duration)}</span>
      </div>
    </li>
  );
}

export default TrackLi;
