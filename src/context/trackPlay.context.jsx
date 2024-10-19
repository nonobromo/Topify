import { createContext, useContext, useState } from "react";

const trackContext = createContext({
  playingTrack: "",
  chooseTrack: () => {},
});

function PlayingTrack({ children }) {
  const [playingTrack, setPlayingTrack] = useState("");

  function chooseTrack(track) {
    setPlayingTrack(track);
  }

  return (
    <trackContext.Provider value={{ chooseTrack, playingTrack }}>
      {children}
    </trackContext.Provider>
  );
}

export function useTrack() {
  return useContext(trackContext);
}

export default PlayingTrack;
