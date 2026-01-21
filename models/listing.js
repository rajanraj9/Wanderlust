const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    }, 
    description:{
      type: String,
    },
    image: {
        filename: String,
        url: {
          type: String,
        default: 
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
        set: (v) =>
          v === "" 
             ? "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" 
             : v,
    }, 
  },
    price:{
      type: Number,
    },
    location:{ 
      type: String,
    },
    country: { 
      type: String,
    },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;