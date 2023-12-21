"use strict";

let countryName;

const onChangeHandler = (e) => {
  countryName = e.target.value;
};

const fetchCountry = async (countryName) => {
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  const data = await res.json();

  return data;
};

const onSearchClick = async () => {
  // fetch
  try {
    const data = await fetchCountry(countryName);
    console.log(data);

    // create html elements
    const container = document.querySelector(".container");
    const countryInfo = document.createElement("div");
    countryInfo.className = "countryInfo";
    const flag = document.createElement("img");
    const name = document.createElement("h3");
    const population = document.createElement("p");
    const currency = document.createElement("p");

    //giving attributes
    flag.alt = "Flag";
    flag.style.width = "100px";
    flag.src = data[0].flags.png;
    name.textContent = data[0].name.official;
    population.textContent = `Population is about ${data[0].population}`;
    let currencyKey = Object.keys(data[0].currencies);
    currency.textContent = `Currency is ${
      data[0].currencies[currencyKey[0]].name
    }`;

    // appending
    countryInfo.append(flag, name, population, currency);
    container.append(countryInfo);
    document.body.append(container);
  } catch (err) {
    console.log(err);
  }

  // clearing input after search click
  const searchInput = document.getElementById("searchInput");
  searchInput.value = "";
};

localStorage.setItem("onSearchClick", onSearchClick.toString());

const storedClickFunction = localStorage.getItem("onSearchClick");
if (storedClickFunction) {
  const onSearchClickRestored = new Function("return " + storedClickFunction)();
  const searchBtn = document.querySelector("#searchBtn");
  searchBtn.addEventListener("click", onSearchClickRestored);
}
