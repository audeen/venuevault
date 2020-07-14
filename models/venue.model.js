const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const venueSchema = new Schema(
  {
    //Details
    venueName: {
      type: String,
      required: [true, "Please provide a Name!"],
      unique: [true, "Venue-Name already exists!"],
    },
    venueStreet: { type: String, required: false },
    venuePostal: { type: String, required: false },
    venueCity: { type: String, required: false },

    //Contact
    contactPerson: { type: String, required: false },
    contactPhone: { type: String, required: false },
    contactMobile: { type: String, required: false },
    contactMail: { type: String, required: false },

    //Logistics
    loadingPath: { type: String, required: false },
    storage: { type: String, required: false },
    parking: { type: String, required: false },

    osm: { type: String, required: false },

    //Stage
    stageWidth: { type: String, required: false },
    stageDepth: { type: String, required: false },
    stageHeight: { type: String, required: false },
    stageLevel: { type: String, required: false },

    //Tech
    availableTech: { type: String, required: false },

    //Power
    stageLeft: { type: String, required: false },
    StageRight: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
