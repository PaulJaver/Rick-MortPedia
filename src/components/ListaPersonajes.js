import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Tarjeta from "./TarjetaPersonaje.js";
import { llamarAPI, paginar } from "../apiRick.js";
import Paginacion from "./Paginacion";
import { SelectorLocalizaciones } from "./SelectorLocalizaciones.js";

const ListaPersonaje = (props) => {
  const [totalPersonajes, setTotalPersonajes] = useState([]);
  const [personajesFiltrados, setPersonajesFiltrados] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [cardsPorPagina] = useState(15);
  let cantidadTotalDePersonajes = personajesFiltrados.length;

  useEffect(() => {
    (async function () {
      const { listadoPersonajes } = await llamarAPI();
      setTotalPersonajes(listadoPersonajes);
      setPersonajesFiltrados(listadoPersonajes);
    })();
  }, []);

  const limpiarFiltro = () => {
    setPersonajesFiltrados(totalPersonajes);
  };

  const filtrarPorLocalizacion = (lugar) => {
    // const lugar = event.target.value;
    const filtrado = totalPersonajes.filter(
      (lugares) => lugares.location.name === lugar
    );
    setPersonajesFiltrados(filtrado);
  };

  const personajesPorPagina = paginar(pagina, personajesFiltrados);

  const mapeoDePersonajes = personajesPorPagina.map((personaje) => {
    return <Tarjeta personaje={personaje} key={personaje.id} />;
  });

  return (
    <section className="container">
      <div>
        <h1 className="titulo mx-auto pt-3 px-auto">Rick & MortyPedia</h1>
      </div>
      <section className="d-flex justify-content-around row mt-4 mb-3">
        <Paginacion
          cardsPorPagina={cardsPorPagina}
          cantidadTotalDePersonajes={cantidadTotalDePersonajes}
          cambiarPagina={setPagina}
          paginaActual={pagina}
        />
        <SelectorLocalizaciones
          limpiarFiltro={limpiarFiltro}
          onChangeSelect={filtrarPorLocalizacion}
        />
        {mapeoDePersonajes}
      </section>
      <Paginacion
        cardsPorPagina={cardsPorPagina}
        cantidadTotalDePersonajes={cantidadTotalDePersonajes}
        cambiarPagina={setPagina}
        paginaActual={pagina}
      />
    </section>
  );
};

export default ListaPersonaje;
