const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);

// const mongodb = require("mongodb");
// const getDb = require("../database/database").getDb;

// class Product {
//   constructor(id, title, description, price, category, images) {
//     this.title = title;
//     this.category = category;
//     this.price = price;
//     this.images = images;
//     this.description = description;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//   }

//   static async fetchAll() {
//     try {
//       const db = getDb();
//       const products = await db.collection("Products").find().toArray();
//       return products;
//     } catch (error) {
//       throw error;
//     }
//   }

//   static async findById(id) {
//     try {
//       const db = getDb();
//       const product = await db
//         .collection("Products")
//         .findOne({ _id: new mongodb.ObjectId(id) });
//       return product;
//     } catch (error) {
//       throw error;
//     }
//   }

//   static async findByCategory(category) {
//     try {
//       const db = getDb();
//       const products = await db
//         .collection("Products")
//         .find({ category })
//         .toArray();
//       return products;
//     } catch (error) {
//       throw error;
//     }
//   }
// }

// module.exports = Product;
