import { useEffect, useState } from "react";
import SpotifyWebPlayer from "react-spotify-web-playback";

function Player({ token, uri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [uri]);

  return (
    <div className="player-footer">
      <SpotifyWebPlayer
        token={token}
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={uri ? [uri] : []}
        styles={{
          bgColor: "#000000",
          color: "#fff",
          trackNameColor: "#fff",
          sliderColor: "white",
          sliderHandleColor: "white",
        }}
        initialVolume={25}
      />
    </div>
  );
}

export default Player;
