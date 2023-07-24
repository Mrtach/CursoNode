const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/biblioteca", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const LibroSchema = new mongoose.Schema(
  {
    titulo: String,
    autor: String,
    fecha: Date
  },
  { collection: "libros" }
);
const Libro = mongoose.model("Libro", LibroSchema);
module.exports = Libro;