/** @format */

const totalCost = (id) => {
  let result = 0;
  const totalCost = document.getElementById(id).textContent;
  result = document.getElementById("totalCost").textContent;
  result = Number(result) + Number(totalCost);
  document.getElementById("totalCost").innerHTML = result;
};

export default totalCost;
