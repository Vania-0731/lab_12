import HeaderComponent from "../components/HeaderComponent";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CategoryContext } from "../context/CategoryContext";
import { SerieContext } from "../context/SerieContext";

function CategoryFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { categories, setCategories } = useContext(CategoryContext);
  const { series, setSeries } = useContext(SerieContext);

  const [nombre, setNombre] = useState("");

  useEffect(() => {
    if (id) {
      const catEdit = categories.find(c => c.cod === Number(id));
      if (catEdit) {
        setNombre(catEdit.nom);
      }
    }
  }, [id, categories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre) return;

    if (id) {
      // Actualizar categoría
      const oldCategory = categories.find(c => c.cod === Number(id));
      const updatedCategories = categories.map(c =>
        c.cod === Number(id) ? { ...c, nom: nombre } : c
      );
      setCategories(updatedCategories);

      // Actualizar todas las series que usaban la categoría anterior
      const updatedSeries = series.map(s =>
        s.cat === oldCategory.nom ? { ...s, cat: nombre } : s
      );
      setSeries(updatedSeries);
    } else {
      // Crear nueva categoría
      const maxCod = categories.reduce((max, c) => (c.cod > max ? c.cod : max), 0);
      const nuevaCategoria = { cod: maxCod + 1, nom: nombre };
      setCategories([...categories, nuevaCategoria]);
    }

    navigate("/categories");
  };

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="border-bottom pb-3 mb-3">
          <h3>{id ? "Editar" : "Nueva"} - Categoría</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputNombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="inputNombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary me-2" type="submit">
            Guardar
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/categories")}
          >
            Cancelar
          </button>
        </form>
      </div>
    </>
  );
}

export default CategoryFormPage;
