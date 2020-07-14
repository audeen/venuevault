import React from "react";

export class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="form-group">
          <label>Venue-Name: </label>
          <input
            type="text"
            required
            className="form-control"
            name="venueName"
            value={this.props.venueName}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Street: </label>
          <input
            type="text"
            required
            className="form-control"
            name="venueStreet"
            value={this.props.venueStreet}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Postal: </label>
          <input
            type="text"
            required
            className="form-control"
            name="venuePostal"
            value={this.props.venuePostal}
            onChange={this.props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>City: </label>
          <input
            type="text"
            required
            className="form-control"
            name="venueCity"
            value={this.props.venueCity}
            onChange={this.props.handleChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
