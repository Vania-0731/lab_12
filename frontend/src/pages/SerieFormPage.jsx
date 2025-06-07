import HeaderComponent from "../components/HeaderComponent";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SerieContext } from "../context/SerieContext";

function SerieFormPage() {
  const { idserie } = useParams();
  const navigate = useNavigate();
  const { series, setSeries } = useContext(SerieContext);

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagenURL, setImagenURL] = useState("");

  useEffect(() => {
    if (idserie) {
      const serieEdit = series.find((s) => s.cod === Number(idserie));
      if (serieEdit) {
        setNombre(serieEdit.nom);
        setCategoria(serieEdit.cat);
        setImagenURL(serieEdit.img);
      }
    }
  }, [idserie, series]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !categoria) return;

    if (idserie) {
      const newSeries = series.map((s) =>
        s.cod === Number(idserie)
          ? { ...s, nom: nombre, cat: categoria, img: imagenURL }
          : s
      );
      setSeries(newSeries);
    } else {
      const maxCod = series.reduce((max, s) => (s.cod > max ? s.cod : max), 0);
      const nuevaSerie = {
        cod: maxCod + 1,
        nom: nombre,
        cat: categoria,
        img: imagenURL,
      };
      setSeries([...series, nuevaSerie]);
    }

    navigate("/series");
  };

  const previewURL = imagenURL.trim()
    ? imagenURL.trim()
    : "https://dummyimage.com/400x250/000/fff&text=preview";

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>{idserie ? "Editar" : "Nuevo"} - Serie</h3>
        </div>
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-md-4">
            <img
              className="card-img-top"
              src={previewURL}
              alt="preview"
              style={{ aspectRatio: "16 / 10", objectFit: "cover", width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputCategory" className="form-label">Categoría</label>
              <select
                className="form-select"
                id="inputCategory"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="inputImageURL" className="form-label">URL de la Imagen</label>
              <input
                type="url"
                className="form-control"
                id="inputImageURL"
                value={imagenURL}
                onChange={(e) => setImagenURL(e.target.value)}
                placeholder="https://..."
              />
              <small className="form-text text-muted">
                Puedes pegar la URL de una imagen externa. Si está vacío, se usará una imagen dummy.
              </small>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary me-2" type="submit">Guardar</button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/series")}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SerieFormPage;
