import { useState, useEffect } from "react";
import ToolTip from "./toolTip";

function ViewStyle({ setShowcase, showCase }) {
  const [gridVisable, setGridVisable] = useState(false);

  const [gridToolTip, setGridToolTip] = useState(false);
  const [listToolTip, setListToolTip] = useState(false);

  const changeIcon = () => {
    setGridVisable((old) => !old);
  };

  const showGridToolTip = () => {
    setGridToolTip((old) => !old);
    setListToolTip((old) => !old);
  };

  const showListToolTip = () => {
    setListToolTip((old) => !old);
    setGridToolTip((old) => !old);
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
            onMouseOver={() => showGridToolTip()}
            onMouseLeave={() => showGridToolTip()}
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
            onMouseOver={() => showListToolTip()}
            onMouseLeave={() => showListToolTip()}
          ></i>
        </div>
      )}
    </div>
  );
}

export default ViewStyle;
