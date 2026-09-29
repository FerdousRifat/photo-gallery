import PhotoCard from "./PhotoCard.jsx";

function PhotoGallery({ photos, onView }) {
  if (photos.length === 0) {
    return <p className="status">No photos found.</p>;
  }

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} onView={onView} />
      ))}
    </div>
  );
}

export default PhotoGallery;
