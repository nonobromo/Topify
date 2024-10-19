import { useState } from "react";
import { useAuth } from "../context/auth.context";
import Welcome from "./welcome";
import GridShowcase from "./examples/gridShowcase";
import ListShowCase from "./examples/listShowcase";
import SetLimit from "./common/setLimit";
import ViewStyle from "./common/viewStyle";
import TopTracks from "./topTracks";

function MainContnent() {
  const { token, setLimit, limit } = useAuth();
  const [showCase, setShowcase] = useState("Grid");

  return (
    <div>
      <h1>Top {limit} Tracks </h1>
    </div>
  );
}

export default MainContnent;
