const Product = require("../models/product");

module.exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      return res.status(200).json({
        products,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Failed to fetch products.",
        error,
      });
    });
};

module.exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => {
      return res.status(200).json({
        product,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Failed to fetch product.",
        error,
      });
    });
};

module.exports.getCategory = (req, res, next) => {
  const category = req.params.category;
  Product.findByCategory(category)
    .then((products) => {
      return res.status(200).json({
        products,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Failed to fetch products.",
        error,
      });
    });
};
