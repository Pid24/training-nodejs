import express from "express";
const barangRouter = express.Router();

// Routes untuk /barangs (tanpa ID)
barangRouter
  .route("/")
  .get((req, res) => {
    res.send("Ini metode get semua barang");
  })
  .post((req, res) => {
    res.send("Ini metode post barang");
  });

// Routes untuk /barangs/:id (dengan parameter ID)
barangRouter
  .route("/:id")
  .get((req, res) => {
    res.send("Ini metode get barang dengan id = " + req.params.id);
  })
  .put((req, res) => {
    res.send("Ini metode put barang dengan id = " + req.params.id);
  })
  .delete((req, res) => {
    res.send("Ini metode delete barang dengan id = " + req.params.id);
  });

export default barangRouter;
