import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCars } from '../store/actions';

class MyCars extends Component {
  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    } else if (this.props.cars) {
      return (
        <div>
          {this.props.cars.map(car => (
            <div key={car._id}>{car.name}</div>
          ))}
        </div>
      );
    } else {
      return <div className="loading">Loading Cats...</div>;
    }
  }
}

