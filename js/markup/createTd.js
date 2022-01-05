/** @format */

import createElem from "./createElem.js";

const createTd = (name) => {
  const tr = createElem({
    nodeType: "tr",
    attribute: [{ name: "id", value: name }],
  });
  const tdName = createElem({
    nodeType: "td",
    text: name,
  });
  const tdAmount = createElem({
    nodeType: "td",
  });
  const tdAmountInput = createElem({
    nodeType: "input",
    attribute: [
      { name: "id", value: "amount" },
      { name: "type", value: "text" },
    ],
  });
  const tdPrice = createElem({
    nodeType: "td",
  });
  const tdPriceInput = createElem({
    nodeType: "input",
    attribute: [
      { name: "id", value: "price" },
      { name: "type", value: "text" },
    ],
  });
  const tdCost = createElem({
    nodeType: "td",
    attribute: [{ name: "id", value: "totalCost" + name }],
  });

  tdAmount.append(tdAmountInput);
  tdPrice.append(tdPriceInput);

  tr.append(tdName);
  tr.append(tdAmount);
  tr.append(tdPrice);
  tr.append(tdCost);

  return tr;
};

export default createTd;
