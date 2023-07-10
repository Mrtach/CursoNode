const express = require("express");
const app = express();
app.use(express.json());

//Importamos el Router de libros
const librosRouter = require("./routes/libros");

//Importamos middleware Error Handler
const errorHandler = require("./middlewares/errorHandler");

app.use("/libros", librosRouter);
app.use(errorHandler);
app.listen(8080, () => {
  console.log("Servidor iniciado en el puerto 8080");
});
