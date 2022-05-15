const llamarAPI = async () => {
  const respuesta = await fetch(`https://rickandmortyapi.com/api/character/`);
  const resultado = await respuesta.json();
  const cantidadTotalDePersonajes = resultado.info.count;
  const lista = [];
  for (let i = 1; i <= cantidadTotalDePersonajes; i++) {
    lista.push(i);
  }
  const answer = await fetch(
    `https://rickandmortyapi.com/api/character/${lista}`
  );
  const listadoPersonajes = await answer.json();
  return {
      cantidadTotalDePersonajes,
      listadoPersonajes
  }
};

const paginar = (pagina, personajesFiltrados) => {
  const primero = (pagina - 1) * 15;
  const ultimo = pagina * 15;
  const personajesPorPagina = personajesFiltrados.slice(primero, ultimo);
  return personajesPorPagina;
};

export { llamarAPI, paginar };
