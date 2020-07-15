import React from "react";
import { Container } from "react-bootstrap";

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    console.log(this.props.handleChange);
    return (
      <Container className="mt-5 pt-5">
        <div className="form-group">
          <label>Contact-Person: </label>
          <input
            type="text"
            className="form-control"
            id="contactPerson"
            name="contactPerson"
            value={this.props.contactPerson}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Phone: </label>
          <input
            type="text"
            className="form-control"
            id="contactPhone"
            name="contactPhone"
            value={this.props.contactPhone}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Mobile: </label>
          <input
            type="text"
            className="form-control"
            id="contactMobile"
            name="contactMobile"
            value={this.props.contactMobile}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>E-Mail: </label>
          <input
            type="text"
            className="form-control"
            id="contactMail"
            name="contactMail"
            value={this.props.contactMail}
            onChange={this.props.handleChange}
          />
        </div>
      </Container>
    );
  }
}

export default Contact;
