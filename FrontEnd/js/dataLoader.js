let api = "http://localhost:8000/stocks";
const stocksList = document.getElementById("stocksList");

//document.addEventListener("load", () => {

//});
function cargarData() {
  fetch(api)
    .then((res) => res.json())
    .then((stocks) => {
      stocks.map((stock) => {
        console.log(stock);
        let valueDeprecated = false;
        if (stock.close < stock.open) {
          valueDeprecated = true;
        }
        const div = document.createElement("div");
        div.className = "stock-item";
        div.id = stock.symbol;
        div.innerHTML += `
        <img
        src="./images/google-logo-24.png"
        alt="ex"
        class="stock-item-img"
        />
        <span>|</span>
        <p class="name-stock">${stock.companyName}</p>
        <span>|</span>
        <p class="price ${valueDeprecated ? "decrement" : "increment"}">
            ${stock.close}
            <span
            ><img
                src="../images/down-arrow.svg"
                class="arrow"
            /></span>
        </p>
        <span>|</span>
        <div class="options-stock">
            <span
            ><img
                src="./images/trash-solid-36.png"
                alt="borrar"
                class="options-img btn_eliminar"
                id="${stock.symbol}"
            /></span>
            <span
            ><img
                src="./images/refresh-regular-36.png"
                alt="actualizar"
                class="options-img btn_actualizar"
                id="${stock.symbol}"
            /></span>
        </div>
        `;
        stocksList.appendChild(div);
      });
    });
}

cargarData();
