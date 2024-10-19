import { useAuth } from "../../context/auth.context";
import { useSearch } from "../../context/serach.context";
import TrackLi from "../common/trackLi";

function ListShowCase() {
  const { tracks } = useAuth();
  const { search } = useSearch();
  return (
    <div className="tracks-li-container">
      <ol>
        {tracks
          .filter((item) => {
            return search.toLowerCase() === ""
              ? true
              : item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((track, i) => {
            return (
              <TrackLi
                key={track.name}
                trackName={track.name}
                artistName={track.artists[0].name}
                img={track.album.images[0].url}
                trackNumber={i}
                uri={track.uri}
                duration={track.duration_ms}
              />
            );
          })}
      </ol>
    </div>
  );
}

export default ListShowCase;
