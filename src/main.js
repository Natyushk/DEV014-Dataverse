import data from './data/dataset.js';

import { renderItems } from './view.js';

// Importar funciones
import { filterByContinent, sortBy, calculateFortuneStats } from './dataFunctions.js';

// import { filterByContinent, sortBy, calculateTotalFortune } from './dataFunctions.js';

const richPeopleList = document.getElementById('rich-people-list');
const totalFortuneElement = document.getElementById('total-fortune');
const averageFortuneElement = document.getElementById('average-fortune');

//Renderizar los elementos inicialmente
richPeopleList.appendChild(renderItems(data));

// Referencias a elementos del DOM
const continentFilterSelect = document.getElementById('continent-filter');
const sortBySelect = document.getElementById('sort-by');
//const richPeopleList = document.getElementById('rich-people-list');

// Manejador de evento para cambio en select
continentFilterSelect.addEventListener('change', () => {
  const continent = continentFilterSelect.value;
  const filteredData = filterByContinent(data, continent);
  const sortedData = sortBy(filteredData, 'fortune', 'asc');
  richPeopleList.innerHTML = '';
  richPeopleList.appendChild(renderItems(sortedData));
  updateFortuneStats(sortedData);
});

// Manejador de evento para el botón de ordenar
sortBySelect.addEventListener('change', () => {
  const [field, order] = sortBySelect.value.split('-');
  const sortedData = sortBy(data, field, order);
  richPeopleList.innerHTML = '';
  richPeopleList.appendChild(renderItems(sortedData));
});

// Función para actualizar y mostrar la fortuna total y el promedio
const updateFortuneStats = (data) => {
  const { totalFortune, averageFortune } = calculateFortuneStats(data);
  totalFortuneElement.textContent = `Suma total de fortunas: ${formatFortune(totalFortune)}`;
  averageFortuneElement.textContent = `Promedio de fortunas: ${formatFortune(averageFortune)}`;
};

// Función para formatear la fortuna
const formatFortune = (fortune) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(fortune);
};

// Actualizar las estadísticas de fortuna inicialmente
updateFortuneStats(data);