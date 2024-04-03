import data from './data/dataset.js';

import { renderItems } from './view.js';

// Importar funciones
import { filterByContinent, sortBy, calculateFortuneStats } from './dataFunctions.js';

// Referencias a elementos del DOM
const continentFilterSelect = document.querySelector('#continent-filter');
const sortBySelect = document.querySelector('#sort-by');
const totalFortuneElement = document.querySelector('#total-fortune');
const averageFortuneElement = document.querySelector('#average-fortune');
const resetButton = document.querySelector('#reset-button');

// Renderizar los elementos inicilmente
<<<<<<< Updated upstream
let richPeopleList = document.querySelector("main").appendChild(renderItems(sortBy(data, 'asc')));
=======
richPeopleList.appendChild(renderItems(data));

// Manejador de evento para cambio en select
continentFilterSelect.addEventListener('change', () => {
  const continent = continentFilterSelect.value;
  const filteredData = filterByContinent(data, continent);
  richPeopleList.innerHTML = '';
  richPeopleList.appendChild(renderItems(filteredData));
  updateFortuneStats(filteredData);
});

// Manejador de evento para el botón de ordenar
sortBySelect.addEventListener('change', () => {
  const [field, order] = sortBySelect.value.split('-');
  const sortedData = sortBy(filterByContinent(data,continentFilterSelect.value), field, order);
  richPeopleList.innerHTML = '';
  richPeopleList.appendChild(renderItems(sortedData));
  updateTotalFortune(sortedData);
});

//Función para actualizar y mostrar la fortuna total
const updateTotalFortune = (data) => {
  const totalFortune = calculateTotalFortune(data); 
  totalFortuneElement.textContent = `Fortuna total: ${formatFortune(totalFortune)}`;
  

  /*const sortedData = sortBy(data, field, order);
  richPeopleList.innerHTML = '';
  richPeopleList.appendChild(renderItems(sortedData));*/
};
>>>>>>> Stashed changes

// Función para actualizar y mostrar la fortuna total y el promedio
const updateFortuneStats = (data) => {
  const [formattedTotalFortune, formattedAverageFortune] = calculateFortuneStats(data)
  totalFortuneElement.textContent = `Suma total de fortunas: $${formattedTotalFortune.toLocaleString('en')} B`;
  averageFortuneElement.textContent = `Promedio de fortunas: $${isNaN(formattedAverageFortune) ? 0 : formattedAverageFortune} B`;
};

// Actualizar las estadísticas de fortuna inicialmente
updateFortuneStats(data);

// Manejador de evento para cambio en select para filtrar por continente
continentFilterSelect.addEventListener('change', () => {
  const continent = continentFilterSelect.value;
  const filteredData = filterByContinent(data, continent);
  sortBySelect.value = 'asc';
  richPeopleList.remove();
  richPeopleList = document.querySelector("main").appendChild(renderItems(filteredData));
  updateFortuneStats(filteredData);
});

// Manejador de evento para cambio en select para ordenar
// sortBySelect.addEventListener('change', () => {
//   const [field, order] = sortBySelect.value.split('-');
//   const sortedData = sortBy(filterByContinent(data,continentFilterSelect.value), field, order);
//   richPeopleList.remove();
//   richPeopleList = document.querySelector("main").appendChild(renderItems(sortedData));
//   updateFortuneStats(sortedData);
// });
sortBySelect.addEventListener('change', () => {
  const order = sortBySelect.value;
  const sortedData = sortBy(filterByContinent(data,continentFilterSelect.value), order);
  richPeopleList.remove();
  richPeopleList = document.querySelector("main").appendChild(renderItems(sortedData));
  updateFortuneStats(sortedData);
});

//Función para boton limpiar
resetButton.addEventListener('click', (event) => {
  continentFilterSelect.value = 'Todos';
  sortBySelect.value = 'asc';
  richPeopleList.remove();
  richPeopleList = document.querySelector("main").appendChild(renderItems(sortBy(data, 'asc')));
  updateFortuneStats(data);
  console.log('Evento', event.type); 
});