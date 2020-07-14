import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function VenueStage(data) {
  let venue = data.venue;
  return (
    <Card>
      <ListGroup variant="flush">
        <Card.Header>Stage Dimensions</Card.Header>
        <ListGroup.Item>Clear Width: {venue.stageWidth}</ListGroup.Item>
        <ListGroup.Item>Clear Height: {venue.stageHeight}</ListGroup.Item>
        <ListGroup.Item>Clear Depth: {venue.stageDepth}</ListGroup.Item>
        <ListGroup.Item>Stage Level: {venue.stageLevel}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
