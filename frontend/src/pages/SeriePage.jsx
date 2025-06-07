import { useContext, useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import SerieComponent from "../components/SerieComponent";
import ConfirmModal from "../components/ConfirmModal";
import { SerieContext } from "../context/SerieContext";
import { NavLink } from "react-router-dom";
import FooterComponent from "../components/FooterComponent";
import SearchComponent from "../components/SearchComponent";

function SeriePage() {
  const { series, toggleFavorite, setSeries } = useContext(SerieContext);
  const [filtro, setFiltro] = useState("");
  const [mostrarSoloFavoritos, setMostrarSoloFavoritos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [serieAEliminar, setSerieAEliminar] = useState(null);

  const seriesFiltradas = series.filter((serie) => {
    const cumpleFiltroNombre = serie.nom.toLowerCase().includes(filtro.toLowerCase());
    const cumpleFiltroFavorito = mostrarSoloFavoritos ? serie.isFavorite : true;
    return cumpleFiltroNombre && cumpleFiltroFavorito;
  });

  function onRequestDelete(codigo) {
    setSerieAEliminar(codigo);
    setModalVisible(true);
  }

  function confirmarEliminacion() {
    setSeries(prev => prev.filter(s => s.cod !== serieAEliminar));
    setModalVisible(false);
    setSerieAEliminar(null);
  }

  function cancelarEliminacion() {
    setModalVisible(false);
    setSerieAEliminar(null);
  }

  return (
    <>
      <HeaderComponent />
      <div className="container mt-3">
        <div className="d-flex justify-content-between border-bottom pb-3 mb-3 align-items-center">
          <h3>Series</h3>
          <div>
            <NavLink className="btn btn-primary" to="/series/create">
              Nuevo
            </NavLink>
          </div>
        </div>

        <div className="mb-3 d-flex gap-3 align-items-center">
          <SearchComponent onSearch={setFiltro} />
          <button
            className={`btn ${mostrarSoloFavoritos ? "btn-warning text-nowrap" : "btn-outline-secondary text-nowrap"}`}
            onClick={() => setMostrarSoloFavoritos(prev => !prev)}
          >
            {mostrarSoloFavoritos ? "Mostrar todos" : "Mostrar solo favoritos"}
          </button>
        </div>

        <div className="row">
          {seriesFiltradas.length > 0 ? (
            seriesFiltradas.map((serie) => (
              <div key={serie.cod} className="col-md-3 mb-3">
                <SerieComponent
                  codigo={serie.cod}
                  nombre={serie.nom}
                  categoria={serie.cat}
                  imagen={serie.img}
                  isFavorite={serie.isFavorite}
                  toggleFavorite={toggleFavorite}
                  onRequestDelete={onRequestDelete}
                />
              </div>
            ))
          ) : (
            <p>No se encontraron series que coincidan.</p>
          )}
        </div>
      </div>
      <FooterComponent/>

      <ConfirmModal
        visible={modalVisible}
        message={`¿Seguro que quieres eliminar ${series.find(s => s.cod === serieAEliminar)?.nom}?`}
        onConfirm={confirmarEliminacion}
        onCancel={cancelarEliminacion}
      />
    </>
  );
}

export default SeriePage;
