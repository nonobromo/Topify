import { useState } from "react";
import { useAuth } from "../context/auth.context";
import { useSearch } from "../context/serach.context";
import { Link, NavLink } from "react-router-dom";

function Header({ setCurrentView }) {
  const { token, handleLogout, userInfo, HREF_LINK } = useAuth();
  const { searchTrack } = useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [statisticsIsOpen, setStatisticsIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleStatisticsMenu = () => {
    setStatisticsIsOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-content">
          {token ? (
            <>
              <div onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                <img
                  src={userInfo?.images[0].url}
                  className="user-img"
                  alt="Profile"
                />

                <ul className={`menu nav-links ${isMenuOpen ? "open" : ""}`}>
                  <Link to="/">
                    <li>{userInfo?.display_name}</li>
                  </Link>
                  <li onClick={handleLogout}>Log out</li>
                </ul>
              </div>
            </>
          ) : (
            <a className="" href={HREF_LINK}>
              Login
            </a>
          )}

          {token && (
            <div
              onMouseLeave={toggleStatisticsMenu}
              onMouseEnter={toggleStatisticsMenu}
            >
              <span>Statistics</span>

              <ul
                className={`menu nav-links ${statisticsIsOpen ? "open" : ""}`}
              >
                <NavLink to="/top-tracks">
                  {" "}
                  <li onClick={() => setCurrentView("Tracks")}>Tracks</li>
                </NavLink>
                <NavLink to="/top-artists">
                  <li onClick={() => setCurrentView("Artists")}>Artists</li>
                </NavLink>
              </ul>
            </div>
          )}

          {token && (
            <div className="search-input-area">
              <input
                type="text"
                className="search-song"
                placeholder="Search for a song..."
                onChange={(e) => searchTrack(e)}
              />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
