import data from './data/dataset.js';

import { renderItems } from './view.js';

// Importar funciones
import { filterByContinent, sortBy} from './dataFunctions.js';
// import { filterByContinent, sortBy, calculateTotalFortune } from './dataFunctions.js';

// Renderizar los elementos inicilmente
let richPeopleList = document.querySelector("main").appendChild(renderItems(data));
console.log(renderItems(data));

// Referencias a elementos del DOM
const continentFilterSelect = document.getElementById('continent-filter');
const sortBySelect = document.getElementById('sort-by');
//const richPeopleList = document.getElementById('rich-people-list');

// Manejador de evento para cambio en select
continentFilterSelect.addEventListener('change', () => {
  const continent = continentFilterSelect.value;
  const filteredData = filterByContinent(data, continent);
  richPeopleList.remove();
  richPeopleList = document.querySelector("main").appendChild(renderItems(filteredData));
  //updateTotalFortune(filteredData);
});

// Manejador de evento para el botón de ordenar
sortBySelect.addEventListener('change', () => {
  const [field, order] = sortBySelect.value.split('-');
  const sortedData = sortBy(data, field, order);
  richPeopleList.remove();
  richPeopleList = document.querySelector("main").appendChild(renderItems(sortedData));
  //updateTotalFortune(sortedData);
});
// Función para actualizar y mostrar la fortuna total
// const updateTotalFortune = (data) => {
//   const totalFortune = calculateTotalFortune(data);
//   totalFortuneElement.textContent = `Fortuna total: ${formatFortune(totalFortune)}`;
// };

