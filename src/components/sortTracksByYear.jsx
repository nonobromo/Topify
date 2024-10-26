import { useEffect, useState } from "react";
import { useAuth } from "../context/auth.context";
import TrackLi from "./common/trackLi";
import SetLimit from "./common/setLimit";
import useSort from "../hooks/useSort";
import TimeRange from "./common/timeRange";

function YearSort() {
  const { tracks, token } = useAuth();
  const [isReversed, setIsReversed] = useState(false);
  const { newTracks, evalMusic } = useSort();

  useEffect(() => {
    evalMusic(tracks);
  }, [token, tracks]);

  const toggleOrder = () => {
    setIsReversed((prevState) => !prevState);
  };

  const displayedTracks = isReversed ? [...newTracks].reverse() : newTracks;

  return (
    <div className="main-sort-container">
      <div className="showcase-options">
        <div className="showcase-options-right">
          <button onClick={toggleOrder} className="sort-button">
            {isReversed ? "Oldest" : "Newest"}
          </button>
          <TimeRange />
        </div>
        <div className="showcase-options-left">
          <SetLimit />
        </div>
      </div>
      <div className="year-container">
        {
          <ul>
            {displayedTracks.map((year) => {
              return (
                <li key={year.year} className="year">
                  {year.year}
                  <ul>
                    {year.tracks.map((track) => {
                      return (
                        <TrackLi
                          img={track.album.images[0].url}
                          trackName={track.name}
                          artistName={track.artists[0].name}
                          duration={track.duration_ms}
                          uri={track.uri}
                        />
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
}

export default YearSort;
