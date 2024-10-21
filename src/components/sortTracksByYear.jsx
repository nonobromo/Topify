import { useEffect, useState } from "react";
import { useAuth } from "../context/auth.context";
import TrackLi from "./common/trackLi";
import SetLimit from "./common/setLimit";

function YearSort() {
  const { tracks, token } = useAuth();

  const [newTracks, setNewTracks] = useState([]);
  const [isReversed, setIsReversed] = useState(false);
  function evalMusic() {
    const tracksByYear = tracks.reduce((acc, item) => {
      const year = new Date(item.album.release_date).getFullYear();

      if (!acc[year]) {
        acc[year] = [];
      }

      acc[year].push(item);

      return acc;
    }, {});

    const groupedTracks = Object.keys(tracksByYear).map((year) => ({
      year,
      tracks: tracksByYear[year],
    }));

    setNewTracks(groupedTracks);
  }

  useEffect(() => {
    evalMusic();
  }, [token, tracks]);

  const toggleOrder = () => {
    setIsReversed((prevState) => !prevState);
  };

  const displayedTracks = isReversed ? [...newTracks].reverse() : newTracks;

  return (
    <div className="main-sort-container">
      <div className="top-container">
        <button onClick={toggleOrder} className="sort-button">
          {isReversed ? "Oldest" : "Newest"}
        </button>
        <SetLimit />
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
