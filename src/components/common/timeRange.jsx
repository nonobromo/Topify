import { useEffect, useState } from "react";
import UserAuth, { useAuth } from "../../context/auth.context";
function TimeRange() {
  const [selectedTerm, setSelectedTerm] = useState("medium_term");
  const { setTerm } = useAuth();
  const [dropDown, openDropDown] = useState(false);

  const hadleTermDropdown = () => {
    openDropDown((oldVal) => !oldVal);
  };

  const selectTerm = (term) => {
    setTerm(term);
    setSelectedTerm(term);
  };

  useEffect(() => {}, []);

  return (
    <div className="set-term-range" onClick={hadleTermDropdown}>
      <span style={{ color: "white" }}>Term</span>
      {dropDown ? (
        <i className="bi bi-caret-up-fill" style={{ color: "white" }}></i>
      ) : (
        <i className="bi bi-caret-down-fill" style={{ color: "white" }}></i>
      )}
      {dropDown && (
        <ul className="term-list">
          <li>Set Term</li>
          <li onClick={() => selectTerm("short_term")}>
            Last Month{" "}
            {selectedTerm === "short_term" && (
              <i className="bi bi-check-lg"></i>
            )}
          </li>
          <li onClick={() => selectTerm("medium_term")}>
            Last 6 Months{" "}
            {selectedTerm === "medium_term" && (
              <i className="bi bi-check-lg"></i>
            )}
          </li>
          <li onClick={() => selectTerm("long_term")}>
            Last Year{" "}
            {selectedTerm === "long_term" && <i className="bi bi-check-lg"></i>}
          </li>
        </ul>
      )}
    </div>
  );
}

export default TimeRange;
