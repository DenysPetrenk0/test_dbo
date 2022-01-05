/** @format */

const createMarkup = () => {
  const table = createElem({
    nodeType: "table",
  });
  const thead = createElem({
    nodeType: "thead",
  });
  const tbody = createElem({
    nodeType: "tbody",
  });
  const trHeading = createElem({
    nodeType: "tr",
  });
  const thName = createElem({
    nodeType: "th",
    text: "Название товара",
  });
  const thAmount = createElem({
    nodeType: "th",
    text: "Количество",
  });
  const thPrice = createElem({
    nodeType: "th",
    text: "Стоимость 1 ед",
  });
  const thTotalCost = createElem({
    nodeType: "th",
    text: "Общая стоимость",
  });
  const trFirst = createTd("Красный носок");
  const trSecond = createTd("Синий носок");
  const trThird = createTd("Бесцветный носок");
  const trFourth = createElem({
    nodeType: "tr",
  });
  const tdTotatlCost = createElem({
    nodeType: "td",
    className: "tdTotatlCost",
    text: "Общая стоимость всех товаров",
    attribute: [{ name: "colspan", value: 3 }],
  });
  const tdTotatlCostValue = createElem({
    nodeType: "td",
    className: "tdTotatlCost",
    attribute: [{ name: "id", value: "totalCost" }],
  });

  trHeading.append(thName);
  trHeading.append(thAmount);
  trHeading.append(thPrice);
  trHeading.append(thTotalCost);
  thead.append(trHeading);
  trFourth.append(tdTotatlCost);
  trFourth.append(tdTotatlCostValue);

  tbody.append(trFirst);
  tbody.append(trSecond);
  tbody.append(trThird);
  tbody.append(trFourth);

  table.append(thead);
  table.append(tbody);

  return table;
};

const render = () => {
  const root = document.getElementById("root");
  root.insertAdjacentElement("beforeend", createMarkup());
};

render();
