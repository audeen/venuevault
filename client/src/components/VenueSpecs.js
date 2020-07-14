import React, { Component } from "react";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import VenueDetails from "./venueSpecs/VenueDetails";
import VenueStage from "./venueSpecs/VenueStage";
import VenueTech from "./venueSpecs/VenueTech";
import VenuePower from "./venueSpecs/VenuePower";

export default class VenueSpecs extends Component {
  constructor(props) {
    super(props);

    this.handleSpecs = this.handleSpecs.bind(this);

    this.state = {
      //Details
      venueName: "",
      venueStreet: "",
      venuePostal: "",
      venueCity: "",

      //Contact
      contactPerson: "",
      contactPhone: "",
      contactMobile: "",
      contactMail: "",

      //Logistics
      loadingPath: "",
      storage: "",
      parking: "",

      osm: "",

      //Stage
      stageWidth: "",
      stageDepth: "",
      stageHeight: "",
      stageLevel: "",

      //Tech
      availableTech: "",

      //Power
      stageLeft: "",
      StageRight: "",

      currentId: "",
      showDetails: "",
    };
  }

  componentDidMount() {
    /*     this.setState({
      showDetails: "specs",
    }); */
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
  handleSpecs(spec) {
    this.setState({
      showDetails: spec,
    });
  }

  render() {
    const specsToRender = () => {
      switch (this.state.showDetails) {
        case "details":
          return <VenueDetails venue={this.state} />;
        case "stage":
          return <VenueStage venue={this.state} />;
        case "tech":
          return <VenueTech venue={this.state} />;
        case "power":
          return <VenuePower venue={this.state} />;

        default:
          return <VenueDetails venue={this.state} />;
      }
    };

    return (
      <React.Fragment>
        <Navbar bg="dark" expand="lg">
          <Link to="/">
            <i className="fas fa-arrow-left fa-2x"></i>
          </Link>

          <Navbar.Brand>{this.state.venueName}</Navbar.Brand>
          <Link to={"/edit/" + this.state.currentId}>
            <i className="fas fa-edit fa-2x"></i>
          </Link>
        </Navbar>
        <Navbar bg="dark" expand="lg">
          <div>
            <button
              onClick={() => {
                this.handleSpecs("details");
              }}
            >
              Details
            </button>

            <button
              onClick={() => {
                this.handleSpecs("stage");
              }}
            >
              Stage
            </button>

            <button
              onClick={() => {
                this.handleSpecs("tech");
              }}
            >
              Tech
            </button>
            <button
              onClick={() => {
                this.handleSpecs("power");
              }}
            >
              Power
            </button>
          </div>
        </Navbar>

        <React.Fragment>{specsToRender()}</React.Fragment>
      </React.Fragment>
    );
  }
}
