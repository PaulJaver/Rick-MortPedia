import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faAngleRight,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const Paginacion = ({
  cardsPorPagina,
  cantidadTotalDePersonajes,
  cambiarPagina,
  paginaActual,
}) => {
  const numeroDePaginas = [];
  const paginasTotales = Math.ceil(cantidadTotalDePersonajes / cardsPorPagina);
  for (let i = 1; i <= paginasTotales; i++) {
    numeroDePaginas.push(i);
  }

  let atras = paginaActual - 4;
  if (atras < 0) {
    atras = 0;
  }
  let adelante = paginaActual + 3;
  if (adelante > paginasTotales) {
    adelante = paginasTotales;
  }

  const paginas = numeroDePaginas.slice(atras, adelante);

  let existeAnterior = paginaActual !== 1;
  let existeSiguiente = paginaActual !== paginasTotales;

  return (
    <nav className="d-flex justify-content-center options">
      <ul className="pagination">
        {existeAnterior && (
          <li className="page-item">
            <button
              className="page-link numbers"
              onClick={() => cambiarPagina(1)}
              href="#"
              type="link"
            >
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faAngleDoubleLeft}></FontAwesomeIcon>
              </span>
            </button>
          </li>
        )}
        {existeAnterior && (
          <li className="page-item">
            <button
              className="page-link numbers"
              href="#"
              type="link"
              onClick={() => cambiarPagina(paginaActual - 1)}
            >
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              </span>
            </button>
          </li>
        )}
        {paginas.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => cambiarPagina(number)}
              type="link"
              className={`${
                number === paginaActual
                  ? "active page-link numbers pag"
                  : "page-link numbers pag"
              }`}
              page-link
              numbers
              pag
            >
              {number}
            </button>
          </li>
        ))}
        {existeSiguiente && (
          <li className="page-item">
            <button
              className="page-link numbers"
              href="#"
              type="link"
              onClick={() => cambiarPagina(paginaActual + 1)}
            >
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </span>
            </button>
          </li>
        )}
        {existeSiguiente && (
          <li className="page-item">
            <button
              className="page-link numbers"
              href="#"
              type="link"
              onClick={() => cambiarPagina(paginasTotales)}
            >
              <span aria-hidden="true">
                <FontAwesomeIcon icon={faAngleDoubleRight}></FontAwesomeIcon>
              </span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Paginacion;
