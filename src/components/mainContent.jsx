import YearSort from "./sortTracksByYear";

function MainContnent() {
  return (
    <div className="">
      <h1>Welcome to Topify!</h1>
      <h2>
        Find out about your top tracks and artists you have listened to this
        year
      </h2>
      <YearSort />
    </div>
  );
}

export default MainContnent;
