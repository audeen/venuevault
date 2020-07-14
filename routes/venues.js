const router = require("express").Router();
let Venue = require("../models/venue.model");

router.route("/").get((req, res) => {
  Venue.find()
    .then((venues) => res.json(venues))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/create").post((req, res) => {
  //Details
  const venueName = req.body.venueName;
  const venueStreet = req.body.venueStreet;
  const venuePostal = req.body.venuePostal;
  const venueCity = req.body.venueCity;

  //Contact
  const contactPerson = req.body.contactPerson;
  const contactPhone = req.body.contactPhone;
  const contactMobile = req.body.contactMobile;
  const contactMail = req.body.contactMail;

  //Logistics
  const loadingPath = req.body.loadingPath;
  const storage = req.body.storage;
  const parking = req.body.parking;

  const osm = req.body.osm;

  //Stage
  const stageWidth = req.body.stageWidth;
  const stageDepth = req.body.stageDepth;
  const stageHeight = req.body.stageHeight;
  const stageLevel = req.body.stageLevel;

  //Tech
  const availableTech = req.body.availableTech;

  //Power
  const stageLeft = req.body.stageLeft;
  const StageRight = req.body.StageRight;

  const newVenue = new Venue({
    /*     name,
    city,
    details,
    details2, */

    venueName,
    venueStreet,
    venuePostal,
    venueCity,
    contactPerson,
    contactPhone,
    contactMobile,
    contactMail,
    loadingPath,
    storage,
    parking,
    osm,
    stageWidth,
    stageDepth,
    stageHeight,
    stageLevel,
    availableTech,
    stageLeft,
    StageRight,
  });

  newVenue
    .save()
    .then(() => res.json("Venue added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Venue.findById(req.params.id)
    .then((venue) => res.json(venue))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Venue.findByIdAndDelete(req.params.id)
    .then(() => res.json("venue deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  Venue.findById(req.params.id)
    .then((venue) => {
      //Details
      venue.venueName = req.body.venueName;
      venue.venueStreet = req.body.venueStreet;
      venue.venuePostal = req.body.venuePostal;
      venue.venueCity = req.body.venueCity;

      //Contact
      venue.contactPerson = req.body.contactPerson;
      venue.contactPhone = req.body.contactPhone;
      venue.contactMobile = req.body.contactMobile;
      venue.contactMail = req.body.contactMail;

      //Logistics
      venue.loadingPath = req.body.loadingPath;
      venue.storage = req.body.storage;
      venue.parking = req.body.parking;

      venue.osm = req.body.osm;

      //Stage
      venue.stageWidth = req.body.stageWidth;
      venue.stageDepth = req.body.stageDepth;
      venue.stageHeight = req.body.stageHeight;
      venue.stageLevel = req.body.stageLevel;

      //Tech
      venue.availableTech = req.body.availableTech;

      //Power
      venue.stageLeft = req.body.stageLeft;
      venue.StageRight = req.body.StageRight;

      venue
        .save()
        .then(() => res.json("venue updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
