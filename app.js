"use strict";

// SELECTIONS

const adviceGeneratorBtn = document.querySelector(
  ".advice__content-dice-container"
);

const adviceDescription = document.querySelector(
  ".advice__content-description"
);
const adviceID = document.querySelector(".advice__id");

// FETCH FUNCTION
const refetch = () => {
  fetch("https://api.adviceslip.com/advice")
    .then(function (response) {
      return response.json();
    })
    .then(function (adviceData) {
      const adviceObject = adviceData.slip;
      console.log(adviceObject);
      adviceDescription.innerHTML = `${adviceObject.advice}`;
      adviceID.textContent = `${adviceObject.id}`;
    })
    .catch(function (error) {
      console.log(error);
    });
};

adviceGeneratorBtn.addEventListener("click", refetch);
