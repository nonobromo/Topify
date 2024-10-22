import { useAuth } from "../context/auth.context";
import SetLimit from "./common/setLimit";
import TimeRange from "./common/timeRange";
import ViewStyle from "./common/viewStyle";
import GridShowcase from "./examples/gridShowcase";
import ListShowCase from "./examples/listShowcase";

function TopTracks({ setShowcase, showCase }) {
  const { token } = useAuth();
  return (
    <div className="">
      <h1>Top Tracks</h1>
      <div className="showcase-options">
        {token && <ViewStyle setShowcase={setShowcase} showCase={showCase} />}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {token && <SetLimit setShowcase={setShowcase} showCase={showCase} />}
          {token && token && <TimeRange />}
        </div>
      </div>

      <div>
        {showCase === "Grid" && <GridShowcase />}
        {showCase === "List" && <ListShowCase />}
      </div>
    </div>
  );
}

export default TopTracks;
