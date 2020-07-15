//Component for displaying Tech-Data on the VenueSpecs-Component

import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function VenueTech(data) {
  let venue = data.venue;
  return (
    <Card>
      <ListGroup variant="flush">
        <Card.Header>Available Tech</Card.Header>
        <ListGroup.Item>{venue.availableTech}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
