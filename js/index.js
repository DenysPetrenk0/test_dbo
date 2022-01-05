/** @format */

import CountTotalPrice from "./countTotalPrice.js";
import createMarkup from "./markup/markup.js";

const render = () => {
  const root = document.getElementById("root");
  root.insertAdjacentElement("beforeend", createMarkup());
};

render();

const redTr = new CountTotalPrice("Красный носок");
redTr.getElem();

const blueTr = new CountTotalPrice("Синий носок");
blueTr.getElem();

const colorlessTr = new CountTotalPrice("Бесцветный носок");
colorlessTr.getElem();
