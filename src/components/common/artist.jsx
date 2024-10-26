function Artist({ img, name }) {
  return (
    <div className="artist">
      <img src={img} alt={name} />
      <span style={{ color: "white" }}>{name}</span>
      <span style={{ color: "white" }}>Artist</span>
    </div>
  );
}

export default Artist;
