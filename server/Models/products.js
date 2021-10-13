const mongoose = require("mongoose");
const express = require("express");

const productSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  name: {
    type: Number,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

const app = express();
app.use(express.json());

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const body = req.body;

  await Product.create(body);
  res.json(body);
});

app.delete("/products/:id", async (req, res) => {
  const id = req.params.id;

  const deletedProduct = await Product.findByIdAndDelete(id);
  res.json(deletedProduct);
});

app.patch("/products/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(id, body);

  res.json(updatedProduct);
});

module.exports = app;
