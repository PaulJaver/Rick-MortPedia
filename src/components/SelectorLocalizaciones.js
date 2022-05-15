import Form from "react-bootstrap/Form";
import { useState, useEffect, useRef } from "react";

export const SelectorLocalizaciones = ({ limpiarFiltro, onChangeSelect }) => {
  const [localizaciones, setLocalizaciones] = useState([]);

  const usarAPI = async () => {
    const respuesta = await fetch(`https://rickandmortyapi.com/api/location`);
    const lugares = await respuesta.json();
    const cuantasLocalizaciones = lugares.info.count;
    const lista = [];
    for (let i = 1; i <= cuantasLocalizaciones; i++) {
      lista.push(i);
    }
    const answer = await fetch(
      `https://rickandmortyapi.com/api/location/${lista}`
    );
    const listadoLocalizaciones = await answer.json();
    return listadoLocalizaciones;
  };

  useEffect(() => {
    (async function () {
      const localizaciones = await usarAPI();
      setLocalizaciones(localizaciones);
    })();
  }, []);

  const mapeoDeLocalizaciones = localizaciones.map((localizacion) => {
    return <option className="elector" key={localizacion.id}>{localizacion.name}</option>;
  });

    const formRef = useRef();
    const reiniciarSelector = () => {
      formRef.current.reset();
    };

  return (
    <div className="row justify-content-center">
      <div className="col-6 mb-4">
        <Form ref={formRef}>
          <Form.Select
            aria-label="Default select example"
            onChange={(event) => onChangeSelect(event.target.value)}
            id="Selector"
            defaultValue="Filtrar por localizacion"
            className="elector"
          >
            <option disabled className="elector">Filtrar por localizacion</option>
            {mapeoDeLocalizaciones}
          </Form.Select>
        </Form>
      </div>
      <div className="col-2 mb-4">
        <button
          onClick={() => {
            limpiarFiltro();
            reiniciarSelector();
          }}
          type="button"
          className="btn boton"
        >
          Limpiar filtro
        </button>
      </div>
    </div>
  );
};
