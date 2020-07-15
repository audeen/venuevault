import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function VenueDetails(data) {
  let venue = data.venue;
  console.log(data);

  return (
    <Card>
      <ListGroup variant="flush">
        <Card.Header>Details</Card.Header>
        <ListGroup.Item>Name: {venue.venueName}</ListGroup.Item>
        <ListGroup.Item>Street: {venue.venueStreet}</ListGroup.Item>
        <ListGroup.Item>Postal: {venue.venuePostal}</ListGroup.Item>
        <ListGroup.Item>City: {venue.venueCity}</ListGroup.Item>
      </ListGroup>
      <ListGroup variant="flush">
        <Card.Header>Contact</Card.Header>
        <ListGroup.Item>Contact-Person: {venue.contactPerson}</ListGroup.Item>
        <ListGroup.Item>Phone: {venue.contactPhone}</ListGroup.Item>
        <ListGroup.Item>Mobile: {venue.contactMobile}</ListGroup.Item>
        <ListGroup.Item>E-Mail: {venue.contactMail}</ListGroup.Item>
      </ListGroup>
      <ListGroup variant="flush">
        <Card.Header>Logistics</Card.Header>
        <ListGroup.Item>Loading-Path: {venue.loadingPath}</ListGroup.Item>
        <ListGroup.Item>Storage: {venue.storage}</ListGroup.Item>
        <ListGroup.Item>Parking: {venue.parking}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
