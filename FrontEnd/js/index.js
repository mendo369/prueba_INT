const API = "localhost:8000";

let agregar = document.querySelector("#btn_agregar");

agregar.addEventListener("click", () => {
  let symbolConsulta = document.getElementById("search-stock").value;
  alert(`buscando ${symbolConsulta}`);
});

//esperamos que se cargen los stocks
setTimeout(() => {
  let actualizar = document.querySelectorAll(".btn_actualizar");
  let eliminar = document.querySelectorAll(".btn_eliminar");

  actualizar.forEach((btn) => {
    btn.addEventListener("click", () => {
      symbol = btn.id;
      alert(`actualizar ${symbol}`);
    });
  });

  eliminar.forEach((btn) => {
    btn.addEventListener("click", () => {
      symbol = btn.id;
      alert(`eliminar ${symbol}`);
    });
  });
}, 2000);
