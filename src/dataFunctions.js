// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

// Función para filtrar los datos por continente
export const filterByContinent = (data, continent) => {
  if (continent === 'Todos') {
    return data; // No aplicar ningún filtro si se selecciona 'Todos'
  } else {
    return data.filter(item => item.extraInfo.continent === continent);
  }
};

// Función para ordenar los datos por fortuna (mayor a menor o menor a mayor) o por nombre
export const sortBy = (data, field, sortOrder) => {
  if (field === 'fortune') {
    return data.sort((a, b) => {
      const fortuneA = parseFortune(a.facts.fortune);
      const fortuneB = parseFortune(b.facts.fortune);
      return sortOrder === 'asc' ? fortuneA - fortuneB : fortuneB - fortuneA;
    });
  } else if (field === 'name') {
    return data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
  }
};

// Función para calcular la fortuna total de los datos
export const calculateTotalFortune = (data) => {
  return data.reduce((total, item) => {
    return total + parseFortune(item.facts.fortune);
  }, 0);
};

// Función auxiliar para convertir la fortuna a un número
const parseFortune = (fortuneString) => {
  return parseFloat(fortuneString.replace(/[^\d.-]/g, ''));
};
