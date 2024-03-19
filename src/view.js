export const renderItems = (data) => {
  let newUl = document.createElement("ul");
  document.body.appendChild(newUl);
  data.forEach(element => {
    let newLi = document.createElement("li");
    newUl.appendChild(newLi);
    let nodoImg = document.createElement("img");
    nodoImg.setAttribute("src", element.imageUrl)
    newLi.appendChild(nodoImg);
    let newP = document.createElement("p");
    newLi.appendChild(newP);
    newP.innerHTML = element.name;
  });
  return nombre;
};