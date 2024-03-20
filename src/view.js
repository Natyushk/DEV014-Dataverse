// Definición de la función renderItems corregida
export const renderItems = (dataArray) => {
  // Verificar si dataArray es un array
  if (!Array.isArray(dataArray)) {
    console.error("Data debe ser un array.");
    return;
  }


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
    const newP = document.createElement("p");
    newP.textContent = element.name;
    newLi.appendChild(newP);
    newP.innerHTML = element.name
  });
};