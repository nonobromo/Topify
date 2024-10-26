import { useState } from "react";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import { Route, Routes } from "react-router-dom";
import TopArtists from "./components/topArtists";
import { useAuth } from "./context/auth.context";
import Player from "./components/common/player";
import { useTrack } from "./context/trackPlay.context";
import TopTracks from "./components/topTracks";
import YearSort from "./components/sortTracksByYear";

function App() {
  const { token } = useAuth();
  const [currentView, setCurrnetView] = useState("Tracks");
  const [showCase, setShowcase] = useState("Grid");

  const { playingTrack } = useTrack();
  return (
    <div className="container">
      <Header setCurrentView={setCurrnetView} />
      <Routes>
        <Route
          path="/"
          element={<TopTracks showCase={showCase} setShowcase={setShowcase} />}
        />
        {token && (
          <Route
            path="/top-tracks"
            element={
              <TopTracks showCase={showCase} setShowcase={setShowcase} />
            }
          />
        )}
        {token && <Route path="/top-artists" element={<TopArtists />} />}
        {token && <Route path="/by-the-years" element={<YearSort />} />}
      </Routes>
      {token && <div>{<Player token={token} uri={playingTrack} />}</div>}
    </div>
  );
}

export default App;
