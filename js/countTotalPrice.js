/** @format */
const refs = {
  tbody: document.getElementsByTagName("tbody"),
  amount: document.getElementById("amount"),
  price: document.getElementById("price"),
};

const countTotalPrice = (event) => {};

refs.tbody[0].addEventListener("input", countTotalPrice);
