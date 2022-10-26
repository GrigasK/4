/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = "./cars.json";

async function getCarData(url) {
  try {
    const response = await fetch(url);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function getCarDataFromJSON(url) {
  const data = await getCarData(url);
  drawCarCard(data);
}

function drawCarCard(data) {
  const output = document.getElementById("output");

  data.forEach((dataItem) => {
    const carDiv = document.createElement("div");
    carDiv.setAttribute("class", "car-container");

    const carBrand = document.createElement("h2");
    carBrand.textContent = dataItem.brand;

    const carModels = document.createElement("p");
    carModels.textContent = dataItem.models;

    carDiv.append(carBrand, carModels);
    output.appendChild(carDiv);
  });
}

getCarDataFromJSON(ENDPOINT);
