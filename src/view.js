// Definición de la función renderItems corregida
export const renderItems = (dataArray) => {
  // Verificar si dataArray es un array
  if (!Array.isArray(dataArray)) {
    console.error("Data debe ser un array.");
    return;
  }

  // Crear un nuevo ul
  const newUl = document.createElement("ul");
  // Iterar sobre cada elemento en el array
  dataArray.forEach(element => {
    // Crear un nuevo li para cada elemento
    const newLi = document.createElement("li");
    newUl.appendChild(newLi);

    // Crear y configurar la imagen
    const nodoImg = document.createElement("img");
    nodoImg.src = element.imageUrl;
    newLi.appendChild(nodoImg);

    // Crear y configurar el párrafo con el nombre
<<<<<<< Updated upstream
    const newP = document.createElement("p");
    newP.textContent = element.name;
    newLi.appendChild(newP);
    newP.innerHTML = element.name
=======
    const newPName = document.createElement("p");
    newPName.textContent = `Nombre: ${element.name}`
    newLi.appendChild(newPName);
    //newPName.innerHTML = element.name;

    const newPContinent = document.createElement("p");
    //newPContinent.textContent = 'Continente: ${element.extraInfo.continent}'
    newLi.appendChild(newPContinent);
    newPContinent.innerHTML = element.extraInfo.continent;

    const newPFortune = document.createElement("p");
    //newPFortune.textContent = 'Fortuna: ${element.facts.fortune}'
    newLi.appendChild(newPFortune);
    newPFortune.innerHTML = element.facts.fortune;

    const newPshortDescription = document.createElement("p");
    //newPFortune.textContent = 'Fortuna: ${element.facts.fortune}'
    newLi.appendChild(newPshortDescription);
    newPshortDescription.innerHTML = element.shortDescription;

    //newP.innerHTML = element.name + element.extraInfo.continent;

>>>>>>> Stashed changes
  });
  return newUl;
};