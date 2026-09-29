function Header({ search, onSearch, albums, album, onAlbum, dark, onToggleDark }) {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__logo">
          <span aria-hidden="true">📸</span> Photo Gallery
        </h1>

        <div className="header__controls">
          <input
            type="search"
            className="control"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            aria-label="Search photos"
          />

          <select
            className="control"
            value={album}
            onChange={(e) => onAlbum(e.target.value)}
            aria-label="Filter by album"
          >
            <option value="all">All Albums</option>
            {albums.map((id) => (
              <option key={id} value={id}>
                Album {id}
              </option>
            ))}
          </select>

          <button
            className="control control--btn"
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
