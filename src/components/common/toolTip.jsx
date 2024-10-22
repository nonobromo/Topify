function ToolTip({ text, showState }) {
  return (
    <span
      style={{
        fontSize: "1rem",
        marginTop: "8px",
      }}
      className={`${showState ? "" : "hide-tool-tip"} `}
    >
      {text}
    </span>
  );
}

export default ToolTip;
