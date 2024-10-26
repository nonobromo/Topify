import { useAuth } from "../../context/auth.context";
import { useSearch } from "../../context/serach.context";
import TrackLi from "../common/trackLi";

function ListShowCase() {
  const { tracks } = useAuth();
  const { search } = useSearch();
  return (
    <div className="tracks-li-container">
      <div className="table-row-top" style={{ color: "white" }}>
        <span>#</span>
        <span>Title</span>
        <span>
          <i className="bi bi-clock hide-item"></i>
        </span>
      </div>
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
                key={track.id}
                trackName={track.name}
                artistName={track.artists[0].name}
                img={track.album.images[0].url}
                trackNumber={i}
                uri={track.uri}
                duration={track.duration_ms}
                trackAlbum={track.album.name}
              />
            );
          })}
      </ol>
    </div>
  );
}

export default ListShowCase;
