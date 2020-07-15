// Component for displaying the specs of a Venue

import React, { Component } from "react";
import axios from "axios";
import {
  Navbar,
  Button,
  Container,
  CardDeck,
  ButtonGroup,
} from "react-bootstrap";
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

      //Stage
      stageWidth: "",
      stageDepth: "",
      stageHeight: "",
      stageLevel: "",

      //Tech
      availableTech: "",

      //Power
      stageLeft: "",
      stageRight: "",

      currentId: "",
      showDetails: "",
    };
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

          //Stage
          stageWidth: response.data.stageWidth,
          stageDepth: response.data.stageDepth,
          stageHeight: response.data.stageHeight,
          stageLevel: response.data.stageLevel,

          //Tech
          availableTech: response.data.availableTech,

          //Power
          stageLeft: response.data.stageLeft,
          stageRight: response.data.stageRight,

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
        <Container className="pb-5">
          <Navbar className="fixed-top py-1 mb-5 bg-primary justify-content-around">
            <Link to="/">
              <i className="fas fa-arrow-left fa-2x"></i>
            </Link>

            <h3>{this.state.venueName}</h3>
            <Link to={"/edit/" + this.state.currentId}>
              <i className="fas fa-edit fa-2x"></i>
            </Link>
          </Navbar>
          <Navbar className="fixed-top py-1 mt-5 mb-5 bg-primary justify-content-around">
            <Container className="mb-2 mt-2">
              <Button
                onClick={() => {
                  this.handleSpecs("details");
                }}
              >
                Details
              </Button>

              <Button
                onClick={() => {
                  this.handleSpecs("stage");
                }}
              >
                Stage
              </Button>

              <Button
                onClick={() => {
                  this.handleSpecs("tech");
                }}
              >
                Tech
              </Button>
              <Button
                onClick={() => {
                  this.handleSpecs("power");
                }}
              >
                Power
              </Button>
            </Container>
          </Navbar>
        </Container>
        <Container>
          <Container className="mt-5 pt-5">{specsToRender()}</Container>
        </Container>
      </React.Fragment>
    );
  }
}
