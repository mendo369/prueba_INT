let { readData } = require("./reeadData");
const pathFileStocks = "../data/stocksList.txt";
const dataJson = require("../data/stockListJson.json");

const API_KEY = "pk_eafa88f7d9f24ee2b8f0e179f2a9493a";
let rutaBusqueda = "https://cloud.iexapis.com/stable/stock/";
//const fetch = require("node-fetch");

module.exports = {
  //   getData: () => readData(pathFileStocks),
  getData: () => JSON.stringify(dataJson),

  agregarStock: (stockSymbol) => {
    let existe = false;
    dataJson.forEach((stock) => {
      if (stockSymbol == stock.symbol) {
        existe = true;
      }
    });
    if (!existe) {
      let newStock = fetch(
        `${rutaBusqueda}${stockSymbol}/quote?token=${API_KEY}`
      ).then((res) => {
        res.json();
      });

      dataJson.push(newStock);
    }
  },

  eliminarStock: (stcokSymbol) => {},
};
