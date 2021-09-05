const client = require("./newclient");
const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors({origin: 'http://127.0.0.1:5500'})); // puerto vista
app.set("PORT", process.env.PORT || 5500);

app.listen(app.get("PORT"), () => {
  console.log("Running!");
})
// ----------------FIN CONFIGURACION-------------------------

client.alta({id: 'uno', nombre: 'soy el cliente',codigo: 'codigo', droga: 'amoxilina',tipo: 'capsula'}, function(err, response) {
  console.log(response);
  app.get("/hello", (req, res) => {
    res.send(response);
  })
});

