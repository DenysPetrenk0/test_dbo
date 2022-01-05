/** @format */

import totalCost from "./totalCost.js";

export default class CountTotalPrice {
  result = null;
  amount = null;
  price = null;

  constructor(id) {
    this.id = id;
  }

  getElem() {
    const tr = document.getElementById(this.id);
    tr.addEventListener("change", this.countTotalPrice);
  }

  countTotalPrice = (event) => {
    if (event.target.id === "amount") {
      this.amount = Number(event.target.value);
    }
    if (event.target.id === "price") {
      this.price = Number(event.target.value);
    }
    this.result = this.amount * this.price;
    if (this.result) {
      document.getElementById("totalCost" + event.currentTarget.id).innerHTML =
        this.result;
      totalCost("totalCost" + event.currentTarget.id);
    }
  };
}
