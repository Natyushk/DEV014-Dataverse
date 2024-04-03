// Función para filtrar los datos por continente
export const filterByContinent = (data, continent) => {
  if (continent === 'Todos') {
    return data; // No aplicar ningún filtro si se selecciona 'Todos'
  } else {
    return data.filter(item => item.extraInfo.continent === continent);
  }
};

// Función para ordenar los datos por fortuna (mayor a menor o menor a mayor) o por nombre
export const sortBy = (data, sortOrder) => {
  if (sortOrder === 'fortune-asc' || sortOrder === 'fortune-desc') {
    return data.sort((a, b) => {
      const fortuneA = parseFortune(a.facts.fortune);
      const fortuneB = parseFortune(b.facts.fortune);
      return sortOrder === 'fortune-asc' ? fortuneA - fortuneB : fortuneB - fortuneA;
    });
  } else if (sortOrder === 'asc' || sortOrder === 'desc') {
    return data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
  }
};
// export const sortBy = (data, sortOrder) => {
//   return data.sort((a, b) => {
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
//     return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
//   });
// };

// Función auxiliar para convertir la fortuna a un número
const parseFortune = (fortuneString) => {
  return parseFloat(fortuneString.replace(/[^\d.-]/g, ''));
};

// Función para calcular la suma total y el promedio de las fortunas
export const calculateFortuneStats = (data) => {
  const filteredFortunes = data.map(item => parseFortune(item.facts.fortune));
  const totalFortune = filteredFortunes.reduce((total, fortune) => total + fortune, 0);
<<<<<<< Updated upstream
  const averageFortune = (totalFortune / filteredFortunes.length).toFixed(2);

  return [ totalFortune, averageFortune ];
=======
  const averageFortune = totalFortune / filteredFortunes.length;

  //Formatear la suma total y el promedio
  const formattedTotalFortune = formatFortune(totalFortune);
  const formattedAverageFortune = formatFortune(averageFortune);

  return { totalFortune: formattedTotalFortune, averageFortune: formattedAverageFortune };
};

// Función auxiliar para formatear la fortuna en el formato deseado
const formatFortune = (fortune) => {
  // Convertir la fortuna a cadena y agregar 'B' al final
  return `$${fortune.toFixed(2)}B`;
};

// Función auxiliar para convertir la fortuna a un número
const parseFortune = (fortuneString) => {
  // Verificar si la cadena de fortuna es nula, indefinida o no es una cadena
  if (fortuneString === null || fortuneString === undefined || typeof fortuneString !== 'string') {
    return 0; // Devolver 0 si la cadena de fortuna no es válida
  }

  // Eliminar caracteres no numéricos excepto "." y "-"
  const sanitizedString = fortuneString.replace(/[^0-9.-]/g, '');

  // Intentar convertir la cadena a un número de punto flotante
  const parsedFortune = parseFloat(sanitizedString);

  // Verificar si el resultado es NaN o infinito
  if (isNaN(parsedFortune) || !isFinite(parsedFortune)) {
    return 0; // Devolver 0 si el resultado no es un número finito
  }

  return parsedFortune; // Devolver la fortuna convertida si es válida
>>>>>>> Stashed changes
};
