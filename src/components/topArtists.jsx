import { useAuth } from "../context/auth.context";
import { useSearch } from "../context/serach.context";
import Artist from "./common/artist";
import SetLimit from "./common/setLimit";
import TimeRange from "./common/timeRange";
function TopArtists() {
  const { artists, limit, token } = useAuth();
  const { search } = useSearch();
  return (
    <>
      <h1>Top Artists</h1>
      <div style={{ width: "75%", margin: "auto" }}>
        <div className="showcase-options">
          {token && <TimeRange />}
          {token && <SetLimit />}
        </div>
        <div className="artists-container">
          {artists
            .filter((item) => {
              return search.toLowerCase() === ""
                ? true
                : item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((artist) => {
              return (
                <Artist
                  name={artist.name}
                  img={artist.images[0].url}
                  key={artist.name}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default TopArtists;
