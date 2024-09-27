import { useAuth } from "../context/auth.context";
import Artist from "./common/artist";

function TopArtists() {
  const { artists } = useAuth();

  return (
    <div>
      <h1>Top 50 Artists</h1>
      <div className="artists-container">
        {artists.map((artist) => {
          return <Artist name={artist.name} img={artist.images[0].url} />;
        })}
      </div>
    </div>
  );
}

export default TopArtists;
