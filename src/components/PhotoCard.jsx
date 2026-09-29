function PhotoCard({ photo, onView }) {
  const { id, albumId, title, thumbnailUrl } = photo;

  return (
    <article className="card">
      <div className="card__img-wrap">
        <img
          className="card__img"
          src={thumbnailUrl}
          alt={title}
          loading="lazy"
          width="150"
          height="150"
        />
      </div>

      <div className="card__body">
        <div className="card__badges">
          <span className="badge">ID: {id}</span>
          <span className="badge badge--alt">Album: {albumId}</span>
        </div>
        <h3 className="card__title">{title}</h3>
        <button className="card__btn" onClick={() => onView(photo)}>
          View Details
        </button>
      </div>
    </article>
  );
}

export default PhotoCard;
