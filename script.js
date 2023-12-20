"use strict";

const getImgBtn = document.querySelector(".getImgBtn");

const onClickHandler = async () => {
  getImgBtn.textContent = "Loading..";

  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const dogImg = document.createElement("img");
    dogImg.className = "dogImg";
    dogImg.src = data.message;
    dogImg.alt = "Dog";

    const imgBox = document.querySelector(".imgBox");
    console.log(data);
    getImgBtn.textContent = "Get Image";
    imgBox.append(dogImg);
  } catch (err) {
    console.log("error:", err);
  }
};

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
