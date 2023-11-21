const getRandomElement = (elemnts) => {
  // Logica necesaria paar devolver un elemento aleatorio de ese arreglo
  const indexRandom = Math.floor(Math.random() * elemnts.length);
  return elemnts[indexRandom];
};

export { getRandomElement}