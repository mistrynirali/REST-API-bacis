const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,

        },
        price: {
            type: Number ,
            required: true,
        },
        featured: {
            type: Boolean,
            default: false,
        },
        rating: {
            type: Number,
            default: false,

        },
        createdAt: {
          type: Date,
          default: Date.now(),
        },
        company: {
            type: String,
            enum: {
                values: ["apple", "samsung", "mi", "dell"],
                message: `{values} is not supported`

            },
        },

    }
);

module.exports = mongoose.model("Product", productsSchema)