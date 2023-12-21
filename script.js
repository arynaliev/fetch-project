"use strict";

// const getImgBtn = document.querySelector(".getImgBtn");

// const onClickHandler = async () => {
//   getImgBtn.textContent = "Loading..";

//   try {
//     const res = await fetch("https://dog.ceo/api/breeds/image/random");
//     const data = await res.json();

//     const dogImg = document.createElement("img");
//     dogImg.className = "dogImg";
//     localStorage.setItem("dogImg", data.message);
//     dogImg.alt = "Dog";

//     const imgBox = document.querySelector(".imgBox");
//     console.log(data);
//     getImgBtn.textContent = "Get Image";
//     imgBox.append(dogImg);
//   } catch (err) {
//     console.log("error:", err);
//   }
// };

// let dogImgFromLocalStorage = localStorage.getItem("dogImg");
// if (dogImgFromLocalStorage) {
//   onClickHandler(dogImgFromLocalStorage);
// }

/*
const audio = document.querySelector(".audio");

const onChangeHandler = (e) => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => data);
  audio.src = data[0].phonetics[0].audio;
  // audio.src =
  //   "https://api.dictionaryapi.dev/media/pronunciations/en/ball-us.mp3";
  audio.play();
};*/

// const getDogImages = async () => {
//   try {
//     const res = await fetch("https://dog.ceo/api/breeds/image/random");
//     const data = await res.json();
//   } catch (err) {
//     console.log("error:", err);
//   }
// };

// getDogImages();

// const arr = [1, 2, 10, 40, 120, -170];
// const getSumOfArr = (array) => {
//   // let sum = 0;
//   // for (const item of array) {
//   //   sum += item;
//   // }
//   let sum = array.reduce((prevSum, el) => prevSum + el, 0);
//   return sum;
// };
// console.log(getSumOfArr(arr));

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
  const data = await fetchCountry(countryName);
  console.log(data);

  // select dom elements
  const name = document.querySelector("#name");
  const population = document.querySelector("#population");
  const currency = document.querySelector("#currency");
  const flag = document.getElementById("flag");
  //
  flag.src = data[0].flags.png;
  name.textContent = data[0].name.official;
  population.textContent = data[0].population;
  let currencyKey = Object.keys(data[0].currencies);
  currency.textContent = data[0].currencies[currencyKey[0]].name;
};
