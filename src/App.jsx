import { useState } from "react";
import Header from "./components/header";
import MainContnent from "./components/mainContent";
import { useAuth } from "./context/auth.context";
import TopArtists from "./components/topArtists";
function App() {
  const [currentView, setCurrentView] = useState("Tracks");

  return (
    <div className="container">
      <Header setCurrentView={setCurrentView} />
      {currentView === "Tracks" && <MainContnent />}
      {currentView === "Artists" && <TopArtists />}
    </div>
  );
}

export default App;
