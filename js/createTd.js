/** @format */

const createTd = (name) => {
  const tr = createElem({
    nodeType: "tr",
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
    attribute: [{ name: "id", value: "amount" + name }],
  });
  const tdPrice = createElem({
    nodeType: "td",
  });
  const tdPriceInput = createElem({
    nodeType: "input",
    attribute: [{ name: "id", value: "price" + name }],
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
