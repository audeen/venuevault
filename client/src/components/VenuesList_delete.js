// Component for displaying the delete-button on every Venue on the landing page

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button, Col } from "react-bootstrap";
import NavbarDelete from "./navigation/NavbarDelete";
import axios from "axios";

const Venue = (props) => (
  <Col>
    <Card className="mt-2">
      <Link to={"specs/" + props.venue._id} style={{ textDecoration: "none" }}>
        <Card.Body>
          <Card.Title>{props.venue.venueName}</Card.Title>
          <Card.Text>{props.venue.venueCity}</Card.Text>
        </Card.Body>
      </Link>
      <Container>
        <Button
          className="btn-block mb-2"
          variant="danger"
          onClick={() => {
            props.deleteVenue(props.venue._id);
          }}
        >
          Delete {props.venue.venueName}
        </Button>
      </Container>
    </Card>
  </Col>
);

export default class VenueList_delete extends Component {
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
  deleteVenue(id) {
    axios.delete("/venues/" + id).then((res) => console.log(res.data));

    this.setState({
      venues: this.state.venues.filter((el) => el._id !== id),
    });
  }
  render() {
    return (
      <React.Fragment>
        <NavbarDelete />
        <Container className="mt-5 pt-4">{this.venueList()}</Container>
      </React.Fragment>
    );
  }
}
