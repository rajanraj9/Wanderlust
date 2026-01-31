const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");

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

    reviews:[ {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});


listingSchema.post("findOneAndDelete", async (listing) => {
  if(listing){
    await Review.deleteMany({_id : {$in : listing.reviews}});

  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;