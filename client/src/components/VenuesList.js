import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, CardDeck, Alert } from "react-bootstrap";
import NavbarHome from "./navigation/NavbarHome";

import axios from "axios";

const Venue = (props) => (
  <div>
    <Card className="mt-3">
      <Link to={"specs/" + props.venue._id} style={{ textDecoration: "none" }}>
        <Card.Body>
          <Card.Title>{props.venue.venueName}</Card.Title>
          <Card.Text>{props.venue.venueStreet}</Card.Text>
          <Card.Text>{props.venue.venueCity}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  </div>
);

export default class VenueList extends Component {
  constructor(props) {
    super(props);

    this.deleteVenue = this.deleteVenue.bind(this);

    this.state = {
      venues: [],
    };
  }

  componentDidMount() {
    axios
      .get("/venues/")
      .then((response) => {
        this.setState({ venues: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  venueList() {
    if (!this.state.venues.length) {
      return <Alert variant="danger">Please add a venue to your vault!</Alert>;
    } else {
      return this.state.venues.map((currentvenue) => {
        return (
          <Venue
            venue={currentvenue}
            deleteVenue={this.deleteVenue}
            key={currentvenue._id}
          />
        );
      });
    }
  }
  deleteVenue(id) {
    axios.delete("/venues/" + id).then((res) => console.log(res.data));

    this.setState({
      venues: this.state.venues.filter((el) => el._id !== id),
    });
  }
  render() {
    return (
      <React.Fragment>
        <NavbarHome />
        <Container className="pt-5 mt-2">{this.venueList()}</Container>
      </React.Fragment>
    );
  }
}
