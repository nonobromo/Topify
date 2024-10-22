import { useAuth } from "../../context/auth.context";
import { useSearch } from "../../context/serach.context";
import Track from "../common/track";

function GridShowcase() {
  const { tracks } = useAuth();
  const { search } = useSearch();

  return (
    <div className="tracks-container">
      {tracks
        .filter((item) => {
          return search.toLowerCase() === ""
            ? true
            : item.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((track, i) => {
          return (
            <Track
              key={track.id}
              trackName={track.name}
              artistName={track.artists[0].name}
              img={track.album.images[0].url}
              trackNumber={i}
              uri={track.uri}
              duration={track.duration_ms}
            />
          );
        })}
    </div>
  );
}

export default GridShowcase;
