import React, { Component } from "react";
import axios from "axios";
import Details from "./edit/Details";
import Contact from "./edit/Contact";
import Logistics from "./edit/Logistics";
import Stage from "./edit/Stage";
import Tech from "./edit/Tech";
import Power from "./edit/Power";
import NavbarEdit from "./navigation/NavbarEdit";

export default class EditVenue extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);

    this.state = {
      //Details
      venueName: "",
      venueStreet: "",
      venuePostal: "",
      venueCity: "",

      currentStep: 1,
    };
  }

  _next() {
    let currentStep = this.state.currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 5 ? 6 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }
  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 6) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const venue = {
      venueName: this.state.venueName,
      venueStreet: this.state.venueStreet,
      venuePostal: this.state.venuePostal,
      venueCity: this.state.venueCity,

      contactPerson: this.state.contactPerson,
      contactPhone: this.state.contactPhone,
      contactMobile: this.state.contactMobile,
      contactMail: this.state.contactMail,

      loadingPath: this.state.loadingPath,
      storage: this.state.storage,
      parking: this.state.parking,
      osm: this.state.osm,

      stageWidth: this.state.stageWidth,
      stageDepth: this.state.stageDepth,
      stageHeight: this.state.stageHeight,
      stageLevel: this.state.stageLevel,

      availableTech: this.state.availableTech,

      stageLeft: this.state.stageLeft,
      StageRight: this.state.StageRight,
    };

    console.log(venue);

    axios
      .post("/venues/update/" + this.props.match.params.id, venue)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  componentDidMount() {
    axios
      .get("/venues/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          venueName: response.data.venueName,
          venueStreet: response.data.venueStreet,
          venuePostal: response.data.venuePostal,
          venueCity: response.data.venueCity,

          //Contact
          contactPerson: response.data.contactPerson,
          contactPhone: response.data.contactPhone,
          contactMobile: response.data.contactMobile,
          contactMail: response.data.contactMail,

          //Logistics
          loadingPath: response.data.loadingPath,
          storage: response.data.storage,
          parking: response.data.parking,

          osm: response.data.osm,

          //Stage
          stageWidth: response.data.stageWidth,
          stageDepth: response.data.stageDepth,
          stageHeight: response.data.stageHeight,
          stageLevel: response.data.stageLevel,

          //Tech
          availableTech: response.data.availableTech,

          //Power
          stageLeft: response.data.stageLeft,
          StageRight: response.data.StageRight,

          currentId: response.data._id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <NavbarEdit venueName={this.state.venueName} />
        <form onSubmit={this.onSubmit}>
          <Details
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            venueName={this.state.venueName}
            venueStreet={this.state.venueStreet}
            venuePostal={this.state.venuePostal}
            venueCity={this.state.venueCity}
          />

          <Contact
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            contactPerson={this.state.contactPerson}
            contactPhone={this.state.contactPhone}
            contactMobile={this.state.contactMobile}
            contactMail={this.state.contactMail}
          />
          <Logistics
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            loadingPath={this.state.loadingPath}
            storage={this.state.storage}
            parking={this.state.parking}
            osm={this.state.osm}
          />
          <Stage
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            stageWidth={this.state.stageWidth}
            stageDepth={this.state.stageDepth}
            stageHeight={this.state.stageHeight}
            stageLevel={this.state.stageLevel}
          />

          <Tech
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            availableTech={this.state.availableTech}
          />
          <Power
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            stageLeft={this.state.stageLeft}
            StageRight={this.state.StageRight}
          />

          {this.previousButton}
          {this.nextButton}
        </form>
      </div>
    );
  }
}
