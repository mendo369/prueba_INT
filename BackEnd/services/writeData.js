let fs = require("fs");
let dataJson = require("../data/stockListJson.json");

module.exports = {
  agregarStock: (stockA) => {
    dataJson.push(stockA);
  },
  eliminarStock: (stockE) => {
    let index;
    symbol = stockE.symbol;
    dataJson.forEach((stock) => {
      if (stock.symbol == symbol) {
        index = dataJson.indexOf(stock); //nos devuelve el index del stock que vamos a eliminar
      }
    });
    dataJson.splice(index, 1);
  },
  actualizarStock: (stockAC) => {
    let index;
    symbol = stockAC.symbol;
    dataJson.forEach((stock) => {
      if (stock.symbol == symbol) {
        index = dataJson.indexOf(stock);
      }
    });
    dataJson[index] = stockAC;
  },
};
