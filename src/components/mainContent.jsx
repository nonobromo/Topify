import GridShowcase from "./examples/gridShowcase";
import YearSort from "./sortTracksByYear";
import TopTracks from "./topTracks";

function MainContnent() {
  return (
    <div className="">
      <h1>Welcome to Topify!</h1>
      <h2>
        Find out about your top tracks and artists you have listened to this
        year
      </h2>
      <div style={{ width: "75%", margin: "auto" }}>
        <GridShowcase />
      </div>
    </div>
  );
}

export default MainContnent;
