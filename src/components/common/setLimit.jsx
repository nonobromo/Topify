import { useAuth } from "../../context/auth.context";

function SetLimit() {
  const { setLimit } = useAuth();

  return (
    <div className="set-limit">
      <label style={{ color: "white" }}>
        Set Limit To:
        <select
          onChange={(e) => setLimit(e.target.value)}
          className="limit-select"
        >
          <option selected="true" disabled="disabled"></option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </label>
    </div>
  );
}

export default SetLimit;
