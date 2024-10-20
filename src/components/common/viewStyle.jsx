function ViewStyle({ setShowcase, showCase }) {
  return (
    <div className="viewStyle-container">
      <span>View As : {showCase}</span>
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
    </div>
  );
}

export default ViewStyle;
