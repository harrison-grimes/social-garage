import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getCats, deleteCat, createCat } from '../store/actions';

import Cat from './Cat';
import CreateCat from './NewCat';

class Home extends Component {
  state = {
    edit: null
  }

  edit = (id) => this.setState({edit: id})

  componentDidMount() {
    this.props.getCats();
  }

  render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/login" />;
    } else if(this.state.editMode) {
      return <Redirect to={`/edit/${this.edit}`}/>;
    } else if (this.props.cats) {
      return (
        <div>
          {this.props.cats.map(cat => (
            <Cat 
              key={cat._id}
              cat={cat} 
              user={this.props.user}
              deleteCat={this.props.deleteCat}
              edit={this.props.edit}
            />
          ))}
            <CreateCat createNewCat={this.props.createCat} />
        </div>
      );
    } else {
      return <div>Loading Cats...</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user,
    cats: state.cats,
    user: state.user
  };
}

const mapDispatchToProps = {
  getCats,
  deleteCat,
  createCat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
