import { useState } from "react";
import useTime from "../../hooks/useTime";
import { useTrack } from "../../context/trackPlay.context";
function Track({ img, trackName, artistName, trackNumber, uri, duration }) {
  const [hover, setHover] = useState(false);
  const { chooseTrack } = useTrack();
  return (
    <div className="song-container">
      <div className="track">
        <span className="song-number">
          {trackNumber < 9 ? `0${trackNumber + 1}` : trackNumber + 1}
        </span>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img src={img} alt="" style={{ width: 200, marginBottom: "16px" }} />
          {hover && (
            <i
              onClick={() => chooseTrack(uri)}
              className="bi bi-play-circle-fill"
              style={{
                color: "#1BD760",
                position: "absolute",
                bottom: "20px",
                right: "10px",
                fontSize: "36px",
                cursor: "pointer",
              }}
            ></i>
          )}
        </div>

        <h2>{trackName}</h2>
        <h3>{artistName}</h3>
        <span>{useTime(duration)}</span>
      </div>
    </div>
  );
}

export default Track;
