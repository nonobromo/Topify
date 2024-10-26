import { useState } from "react";
import { useAuth } from "../../context/auth.context";

function SetLimit() {
  const { setLimit } = useAuth();
  const [selectedLimit, setSelectedLimit] = useState(25);
  const handleSetLimit = (limit) => {
    setLimit(limit);
    setSelectedLimit(limit);
  };

  return (
    <div className="set-limit">
      <span
        className={`limit-btn ${selectedLimit === 50 ? "active" : ""}`}
        onClick={() => handleSetLimit(50)}
      >
        All
      </span>
      <span
        className={`limit-btn ${selectedLimit === 5 ? "active" : ""}`}
        onClick={() => handleSetLimit(5)}
      >
        Top 5
      </span>
      <span
        className={`limit-btn ${selectedLimit === 10 ? "active" : ""}`}
        onClick={() => handleSetLimit(10)}
      >
        Top 10
      </span>
      <span
        className={`limit-btn ${selectedLimit === 25 ? "active" : ""}`}
        onClick={() => handleSetLimit(25)}
      >
        Top 25
      </span>
    </div>
  );
}

export default SetLimit;
