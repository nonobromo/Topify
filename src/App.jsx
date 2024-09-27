import { useState } from "react";
import Header from "./components/header";
import MainContent from "./components/mainContent";
import { Route, Routes } from "react-router-dom";
import TopArtists from "./components/topArtists";

function App() {
  const [currentView, setCurrnetView] = useState("Tracks");
  return (
    <div className="container">
      <Header setCurrentView={setCurrnetView} />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/top-tracks" element={<MainContent />} />
        <Route path="/top-artists" element={<TopArtists />} />
      </Routes>
    </div>
  );
}

export default App;
