/** @format */

const countTotalPrice = (event) => {
  let result = 0;
  let amount = 0;
  let price = 0;
  if (event.target.id === "amount") {
    amount = Number(event.target.value);
  }
  if (event.target.id === "price") {
    price = Number(event.target.value);
  }
  result = amount * price;
  document.getElementById("totalCost").innerHTML = result;
};

const tbody = document.getElementsByTagName("tbody");

tbody[0].addEventListener("change", countTotalPrice);
