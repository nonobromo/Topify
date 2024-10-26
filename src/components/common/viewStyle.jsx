import { useState, useEffect } from "react";
import ToolTip from "./toolTip";

function ViewStyle({ setShowcase, showCase }) {
  const [gridVisable, setGridVisable] = useState(false);

  const changeIcon = () => {
    setGridVisable((old) => !old);
  };

  return (
    <div className="view-style" onClick={changeIcon}>
      {gridVisable ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <i
            className="bi bi-card-list bi bi-grid-3x3-gap"
            onClick={() => setShowcase("Grid")}
          ></i>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <i
            className="bi bi-card-list"
            onClick={() => setShowcase("List")}
          ></i>
        </div>
      )}
    </div>
  );
}

export default ViewStyle;
