"use strict";

const getImgBtn = document.querySelector(".getImgBtn");

const onClickHandler = () => {
  getImgBtn.textContent = "Loading..";
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const dogImg = document.createElement("img");
      dogImg.className = "dogImg";
      dogImg.src = data.message;
      dogImg.alt = "Dog";
      dogImg.style.width = "200px";

      const imgBox = document.querySelector(".imgBox");
      console.log(data);
      getImgBtn.textContent = "Get Image";
      imgBox.append(dogImg);
    })
    .catch((err) => console.log("error:", err));
};
