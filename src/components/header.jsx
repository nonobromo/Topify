import { useState } from "react";
import { useAuth } from "../context/auth.context";
import { useSearch } from "../context/serach.context";
import { Link, NavLink } from "react-router-dom";
import Logo from "./common/logo";

function Header({ setCurrentView }) {
  const { token, handleLogout, userInfo, HREF_LINK } = useAuth();
  const { searchTrack } = useSearch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [statisticsIsOpen, setStatisticsIsOpen] = useState(false);

  const [open, isOpen] = useState(false);

  const handleOpen = () => {
    isOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const toggleStatisticsMenu = () => {
    setStatisticsIsOpen((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>

        <div className={`navbar-content ${open ? "active" : ""}`}>
          <ul className="nav-statistics">
            <li>About</li>
            <li>
              <NavLink to="/top-tracks" className="nav-link">
                Tracks
              </NavLink>
            </li>
            <li>
              <NavLink to="/top-artists" className="nav-link">
                Artists
              </NavLink>
            </li>
            <li>
              <NavLink to="/by-the-years" className="nav-link">
                By The Years
              </NavLink>
            </li>
          </ul>

          {token ? (
            <>
              <div
                onMouseEnter={toggleMenu}
                onMouseLeave={toggleMenu}
                className="img-circle"
              >
                <img
                  src={userInfo?.images[0].url}
                  className="user-img"
                  alt="Profile"
                />

                <ul className={`menu nav-links ${isMenuOpen ? "open" : ""}`}>
                  <li onClick={handleLogout}>Log out</li>
                </ul>
              </div>
            </>
          ) : (
            <a className="" href={HREF_LINK}>
              Login
            </a>
          )}
        </div>

        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={handleOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;

//Search Input

{
  /* <div className="search-input-area">
<input
  type="text"
  className="search-song"
  placeholder="Search for a song..."
  onChange={(e) => searchTrack(e)}
/>
</div> */
}

// Statistics

// {token && (
//   <div
//     onMouseLeave={toggleStatisticsMenu}
//     onMouseEnter={toggleStatisticsMenu}
//   >
//     <span>Statistics</span>

//     <ul
//       className={`menu nav-links ${statisticsIsOpen ? "open" : ""}`}
//     >
//       <NavLink to="/top-tracks">
//         {" "}
//         <li onClick={() => setCurrentView("Tracks")}>Tracks</li>
//       </NavLink>
//       <NavLink to="/top-artists">
//         <li onClick={() => setCurrentView("Artists")}>Artists</li>
//       </NavLink>
//     </ul>
//   </div>
// )}

// User img

{
  /* <div onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
<img
  src={userInfo?.images[0].url}
  className="user-img"
  alt="Profile"
/>

<ul className={`menu nav-links ${isMenuOpen ? "open" : ""}`}>
  <Link to="/">
    <li>About</li>
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
</div> */
}
