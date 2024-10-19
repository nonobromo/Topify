import { useState, useEffect, createContext, useContext } from "react";

export const userData = createContext({
  token: "",
  tracks: [],
  getData: () => {},
  handleLogout: () => {},
  HREF_LINK: "",
  getUserData: () => {},
  userInfo: null,
  getTopArtists: () => {},
  artists: [],
  limit: 25,
  setLimit: () => {},
});

function UserAuth({ children }) {
  const CLIENT_ID = "476cc57365b648b3bd59a4cf35e96e4f";
  const REDIRECT_URI = "http://localhost:5173/";

  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const HREF_LINK = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=streaming%20user-read-email%20user-read-private%20user-read-playback-state%20user-modify-playback-state%20user-top-read`;

  const [token, setToken] = useState("");
  const [error, setError] = useState(null);
  const [tracks, setTracks] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [artists, setArtists] = useState([]);
  const [limit, setLimit] = useState(25);

  console.log(limit);
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];

      window.location.hash = "";
      if (token) {
        window.localStorage.setItem("token", token);
        setToken(token);
      } else {
        setError("Failed to retrieve access token from URL.");
      }
    } else if (token) {
      setToken(token);
    }
  }, []);

  const getData = async () => {
    if (token) {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/me/top/tracks?limit=${limit}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            setError("Unauthorized access. Please log in again.");
            window.localStorage.removeItem("token");
            setToken("");
          } else {
            setError(`Error fetching data: ${response.statusText}`);
          }
          return;
        }

        const data = await response.json();
        setTracks(data.items);
      } catch (error) {
        setError("Failed to fetch data. Please check your network connection.");
        console.error("Error fetching data:", error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      getUserData();
      getData();
      getTopArtists();
    }
  }, [token, limit]);

  const getUserData = async () => {
    if (token) {
      try {
        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          if (response.status === 401) {
            setError("Unauthorized access. Please log in again.");
            window.localStorage.removeItem("token");
            setToken("");
          } else {
            setError(`Error fetching user data: ${response.statusText}`);
          }
          return;
        }

        const data = await response.json();
        setUserInfo(data);
      } catch (error) {
        setError(
          "Failed to fetch user profile. Please check your network connection."
        );
        console.error("Error fetching user profile:", error);
      }
    }
  };

  const getTopArtists = async () => {
    if (token) {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/me/top/artists?limit=${limit}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          if (response.status === 401) {
            setError("Unauthorized access. Please log in again.");
            window.localStorage.removeItem("token");
            setToken("");
          } else {
            setError(`Error fetching data: ${response.statusText}`);
          }
          return;
        }

        const data = await response.json();
        setArtists(data.items);
      } catch (error) {
        setError("Failed to fetch data. Please check your network connection.");
        console.error("Error fetching data:", error);
      }
    }
  };

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  return (
    <userData.Provider
      value={{
        token,
        tracks,
        getData,
        handleLogout,
        HREF_LINK,
        error,
        getUserData,
        userInfo,
        getTopArtists,
        artists,
        setLimit,
        limit,
      }}
    >
      {children}
    </userData.Provider>
  );
}

export function useAuth() {
  return useContext(userData);
}

export default UserAuth;
