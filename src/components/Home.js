import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCars, deleteCar, createCar } from '../store/actions';

import Car from './Cat';
import CreateCar from './NewCar';

class Home extends Component {
  state = {
    edit: null
  }

  edit = (id) => this.setState({edit: id})

  componentDidMount() {
    this.props.getCars();
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    } else if(this.state.editMode) {
      return <Redirect to={`/edit/${this.edit}`}/>;
    } else if (this.props.cars) {
      return (
        <div>
          {this.props.cars.map(car => (
            <Car 
              key={car._id}
              car={car} 
              user={this.props.user}
              deleteCar={this.props.deleteCar}
              edit={this.props.edit}
            />
          ))}
            <CreateCar createNewCar={this.props.createCar} />
        </div>
      );
    } else {
      return <div className="loading">Loading Cars...</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user,
    cats: state.cars,
    user: state.user
  };
}

const mapDispatchToProps = {
  getCars,
  deleteCar,
  createCar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
