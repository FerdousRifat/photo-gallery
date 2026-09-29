import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import PhotoGallery from "./components/PhotoGallery.jsx";
import Footer from "./components/Footer.jsx";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [album, setAlbum] = useState("all");
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState(null);

  // Fetch data with fetch() inside useEffect
  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        return res.json();
      })
      .then((data) => {
        setPhotos(data.slice(0, 100)); // first 100 photos only
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Dark mode
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  // Close modal with Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const albums = [...new Set(photos.map((p) => p.albumId))];

  const filtered = photos.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (album === "all" || p.albumId === Number(album))
  );

  return (
    <div className="app">
      <Header
        search={search}
        onSearch={setSearch}
        albums={albums}
        album={album}
        onAlbum={setAlbum}
        dark={dark}
        onToggleDark={() => setDark((d) => !d)}
      />

      <main className="main">
        {loading && <p className="status">Loading photos...</p>}
        {error && <p className="status status--error">Error: {error}</p>}
        {!loading && !error && (
          <>
            <p className="count">
              Showing {filtered.length} of {photos.length} photos
            </p>
            <PhotoGallery photos={filtered} onView={setSelected} />
          </>
        )}
      </main>

      <Footer />

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal__box" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal__close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img src={selected.url} alt={selected.title} className="modal__img" />
            <div className="modal__info">
              <div className="card__badges">
                <span className="badge">ID: {selected.id}</span>
                <span className="badge badge--alt">Album: {selected.albumId}</span>
              </div>
              <h3>{selected.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
