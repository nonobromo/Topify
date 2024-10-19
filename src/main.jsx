import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import UserAuth from "./context/auth.context.jsx";
import "./style.css";
import "./styles/navbar.css";
import SearchInput from "./context/serach.context.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/artists.css";
import { BrowserRouter } from "react-router-dom";
import PlayingTrack from "./context/trackPlay.context.jsx";
import "./styles/miscStyles.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserAuth>
      <PlayingTrack>
        <SearchInput>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SearchInput>
      </PlayingTrack>
    </UserAuth>
  </StrictMode>
);
