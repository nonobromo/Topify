import { useState } from "react";
import { useAuth } from "../context/auth.context";
import Player from "./common/player";
import Welcome from "./welcome";
import GridShowcase from "./examples/gridShowcase";
import ListShowCase from "./examples/listShowcase";

function MainContnent() {
  const { token, artists } = useAuth();
  const [playingTrack, setPlayingTrack] = useState("");
  const [showCase, setShowcase] = useState("Grid");

  console.log(artists);

  function chooseTrack(track) {
    setPlayingTrack(track);
  }

  return (
    <div>
      <h1>Top 50 Tracks </h1>
      <div className="top-container">
        {token && (
          <>
            <span>View As : {showCase}</span>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100px",
                marginTop: 40,
                listStyleType: "none",
                fontSize: "1.5rem",
              }}
            >
              <li className="icon-hover">
                <i
                  onClick={() => setShowcase("List")}
                  className="bi bi-card-list"
                ></i>
              </li>
              <li className="icon-hover">
                <i
                  onClick={() => setShowcase("Grid")}
                  className="bi bi-grid-3x3-gap"
                ></i>
              </li>
            </ul>
          </>
        )}
      </div>
      {!token ? (
        <Welcome />
      ) : (
        <div>
          {showCase === "Grid" && <GridShowcase chooseTrack={chooseTrack} />}
          {showCase === "List" && <ListShowCase chooseTrack={chooseTrack} />}
          <div>{/* <Player token={token} uri={playingTrack} /> */}</div>
        </div>
      )}
    </div>
  );
}

export default MainContnent;
