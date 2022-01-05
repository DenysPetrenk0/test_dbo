/** @format */
let result = null;
let amount = null;
let price = null;

const countTotalPrice = (event) => {
  if (event.target.id === "amount") {
    amount = Number(event.target.value);
  }
  if (event.target.id === "price") {
    price = Number(event.target.value);
  }
  result = amount * price;
  if (result) {
    document.getElementById("totalCost" + event.currentTarget.id).innerHTML =
      result;
    totalCost();
  }
};

const totalCost = () => {
  let result = 0;
  const redTotalCost = document.getElementById(
    "totalCostКрасный носок"
  ).textContent;
  const blueTotalCost = document.getElementById(
    "totalCostСиний носок"
  ).textContent;
  const colorlessTotalCost = document.getElementById(
    "totalCostБесцветный носок"
  ).textContent;
  result =
    Number(redTotalCost) + Number(blueTotalCost) + Number(colorlessTotalCost);
  document.getElementById("totalCost").innerHTML = result;
};

const redTr = document.getElementById("Красный носок");
const blueTr = document.getElementById("Синий носок");
const colorlessTr = document.getElementById("Бесцветный носок");

redTr.addEventListener("change", countTotalPrice);
blueTr.addEventListener("change", countTotalPrice);
colorlessTr.addEventListener("change", countTotalPrice);
