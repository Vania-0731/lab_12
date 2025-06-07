import { NavLink } from "react-router-dom";
import '../Style/SerieComponent.css';


function SerieComponent({ codigo, nombre, categoria, imagen, isFavorite, toggleFavorite, onRequestDelete }) {
  // Imagen fallback dummy si no hay url o está vacía
  const urlImagen = imagen && imagen.trim() !== ""
    ? imagen
    : "https://dummyimage.com/400x250/000/fff&text=No+Image";

  return (
    <div className="card">
      <img
        className="card-img-top card-img-top"
        src={urlImagen}
        alt={nombre}
        
      />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{categoria}</p>
        <div className="d-flex gap-2">
          <NavLink className="btn btn-secondary" to={`/series/edit/${codigo}`}>
            <i className="bi bi-pencil-square"></i>
          </NavLink>
          <button className="btn btn-danger" onClick={() => onRequestDelete(codigo)}>
            <i className="bi bi-trash-fill"></i>
          </button>
          <button
            className={`btn ms-auto ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() => toggleFavorite(codigo)}
            aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SerieComponent;
