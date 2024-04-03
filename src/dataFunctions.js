
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
  const averageFortune = (totalFortune / filteredFortunes.length).toFixed(2);

  return [ totalFortune, averageFortune ];
};
