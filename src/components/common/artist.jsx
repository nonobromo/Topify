function Artist({ img, name }) {
  return (
    <div className="artist">
      <img src={img} alt={name} />
      <span>{name}</span>
      <span>Artist</span>
    </div>
  );
}

export default Artist;
