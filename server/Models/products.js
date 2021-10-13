const mongoose = require("mongoose");
const express = require("express");

const productSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
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
  try {
    const result = await Product.find();
    return res.json(result);
  } catch (e) {
    console.log("errorrrrrrr", e);
  }
});

app.post("/products", async (req, res) => {
  const body = req.body;
  try {
    const result = await Product.create(body);
    return res.json(result);
  } catch (e) {
    console.log("errorrrrrrr", e);
  }
});

app.delete("/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.json(deletedProduct);
  } catch (e) {
    console.log("errorrrrrrr", e);
  }
});

app.patch("/products/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const body = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, body);

    res.json(updatedProduct);
  } catch (e) {
    console.log("errorrrrrrr", e);
  }
});

module.exports = app;
