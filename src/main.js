
import data from './data/dataset.js';
import { renderItems } from './view.js';

// Importar funciones de dataFunctions.js
import { filterByContinent, sortBy, calculateTotalFortune } from './dataFunctions.js';

// Renderizar los elementos inicialmente
document.querySelector("main").appendChild(renderItems(data))

// Referencias a elementos del DOM
const continentFilterSelect = document.getElementById('continent-filter');
const filterButton = document.getElementById('filter-button');
const sortBySelect = document.getElementById('sort-by');
const sortButton = document.getElementById('sort-button');
const totalFortuneElement = document.getElementById('total-fortune');
//const richPeopleList = document.getElementById('rich-people-list');

// Manejador de evento para el botón de filtrar
filterButton.addEventListener('click', () => {
  const continent = continentFilterSelect.value;
  const filteredData = filterByContinent(data, continent);
  renderItems(filteredData);
  updateTotalFortune(filteredData);
});

// Manejador de evento para el botón de ordenar
sortButton.addEventListener('click', () => {
  const [field, order] = sortBySelect.value.split('-');
  const sortedData = sortBy(data, field, order);
  renderItems(sortedData);
  updateTotalFortune(sortedData);
});

// Función para actualizar y mostrar la fortuna total
const updateTotalFortune = (data) => {
  const totalFortune = calculateTotalFortune(data);
  totalFortuneElement.textContent = `Fortuna total: ${formatFortune(totalFortune)}`;
};

// Función auxiliar para formatear la fortuna
const formatFortune = (fortune) => {
  return '$' + fortune.toLocaleString();
};
