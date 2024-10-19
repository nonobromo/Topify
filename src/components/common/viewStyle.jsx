function ViewStyle({ setShowcase, showCase }) {
  return (
    <>
      <span style={{ marginTop: "40px", display: "block" }}>
        View As : {showCase}
      </span>
      <ul className="view-style">
        <li className="icon-hover">
          <i
            onClick={() => setShowcase("List")}
            className="bi bi-card-list"
          ></i>
        </li>
        <li className="icon-hover">
          <i
            onClick={() => setShowcase("Grid")}
            className="bi bi-grid-3x3-gap"
          ></i>
        </li>
      </ul>
    </>
  );
}

export default ViewStyle;
