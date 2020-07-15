import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function VenueTech(data) {
  let venue = data.venue;
  return (
    <Card>
      <ListGroup variant="flush">
        <Card.Header>Available Tech</Card.Header>
        <input className="textarea">{venue.availableTech}</input>
      </ListGroup>
    </Card>
  );
}
