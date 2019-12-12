import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteCar, editCar } from '../services/cars';

export default class Car extends Component {
  render() {
    const { car, user } = this.props;

    return (
      <div className="car-card" key={car._id}>
          <h4>{car.name}</h4>
          <img src={car.url} className="cat-pic" alt="profile pic"/>
          <p>{car.bio}</p>
        {car.owner === user.id && (
        <>
          <button onClick={() =>  <Link to= "/edit"></Link>}>Edit</button>
          <button onClick={() => this.props.deleteCat(car._id)}>Delete</button>
        </>
    )}
      </div>
    );
  }
}
