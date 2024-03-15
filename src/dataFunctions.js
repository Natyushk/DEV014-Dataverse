// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};*/

//OBTENER DATOS
const API_URL = "https://forbesapi.com/api/v1/people/billionaires";

const fetchMillionaires = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Error al obtener datos: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

//CONVERTIR DATOS
const convertData = (data) => {
  return data.map((millionaire) => {
    const normalizedName = millionaire.firstName.toLowerCase() + "-" + millionaire.lastName.toLowerCase();
    const birthDate = new Date(millionaire.birthDate);
    const age = Math.floor((Date.now() - birthDate.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    return {
      id: normalizedName,
      name: `${millionaire.firstName} ${millionaire.lastName}`,
      shortDescription: `${millionaire.source} - $${millionaire.netWorth.toLocaleString()}B`,
      description: `${millionaire.profile}`,
      imageUrl: `https://www.forbes.com/sites/forbesfinancecouncil/2023/10/10/how-ai-is-disrupting-the-financial-services-industry/?sh=1234567890`, // Reemplazar con URL de imagen generada por IA
      facts: {
        yearOfBirth: birthDate.getFullYear(),
        country: millionaire.countryOfCitizenship,
        netWorth: `$${millionaire.netWorth.toLocaleString()}B`,
        age,
      },
      extraInfo: {
        rank: millionaire.rank,
        industry: millionaire.industry,
        company: millionaire.companyName,
      },
    };
  });
};


//MOSTRAR DATOS
const millionairesData = await fetchMillionaires();
const convertedData = convertData(millionairesData);

const renderCards = (data) => {
  const cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";
  data.forEach((millionaire) => {
    const card = createCard(millionaire);
    cardsContainer.appendChild(card);
  });
};

const createCard = (millionaire) => {
  const cardElement = document.createElement("li");
  cardElement.classList.add("card");
  cardElement.innerHTML = `
    <img src="${millionaire.imageUrl}" alt="${millionaire.name}" />
    <h2>${millionaire.name}</h2>
    <p>${millionaire.shortDescription}</p>
    <ul class="facts">
      <li>Año de nacimiento: ${millionaire.facts.yearOfBirth}</li>
      <li>Edad: ${millionaire.facts.age}</li>
      <li>País: ${millionaire.facts.country}</li>
      <li>Fortuna: ${millionaire.facts.netWorth}</li>
    </ul>
  `;
  return cardElement;
};

renderCards(convertedData);

// Implementar funciones para filtrar, ordenar y limpiar


//FILTRAR
const filterData = (data, filterBy, value) => {
  if (filterBy === "country") {
    return data.filter((millionaire) => millionaire.facts.country === value);
  } else if (filterBy === "age") {
    return data.filter((millionaire) => millionaire.facts.age)
  }
}