import { useAuth } from "../context/auth.context";
import SetLimit from "./common/setLimit";
import ViewStyle from "./common/viewStyle";
import GridShowcase from "./examples/gridShowcase";
import ListShowCase from "./examples/listShowcase";

function TopTracks({ setShowcase, showCase }) {
  const { token } = useAuth();
  return (
    <>
      <div className="top-container">
        {token && <SetLimit />}
        {token && <ViewStyle setShowcase={setShowcase} showCase={showCase} />}
      </div>

      <div>
        {showCase === "Grid" && <GridShowcase />}
        {showCase === "List" && <ListShowCase />}
      </div>
    </>
  );
}

export default TopTracks;
