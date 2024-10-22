import { useState } from "react";
import UserAuth, { useAuth } from "../../context/auth.context";
function TimeRange() {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const { setTerm } = useAuth();

  const handleTerm = (term) => {
    setTerm(term);
    setSelectedTerm(term);
  };

  return (
    <div className="set-term-range">
      <span
        className={`limit-btn ${selectedTerm === "short_term" ? "active" : ""}`}
        onClick={() => handleTerm("short_term")}
      >
        Short Term
      </span>
      <span
        className={`limit-btn ${
          selectedTerm === "medium_term" ? "active" : ""
        }`}
        onClick={() => handleTerm("medium_term")}
      >
        Medium Term
      </span>
      <span
        className={`limit-btn ${selectedTerm === "long_term" ? "active" : ""}`}
        onClick={() => handleTerm("long_term")}
      >
        Long Term
      </span>
    </div>
  );
}

export default TimeRange;
