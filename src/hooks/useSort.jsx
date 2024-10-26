import { useState } from "react";
import { useAuth } from "../context/auth.context";

function useSort() {
  const [newTracks, setNewTracks] = useState([]);

  function evalMusic(tracks) {
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

  return { evalMusic, newTracks };
}

export default useSort;
