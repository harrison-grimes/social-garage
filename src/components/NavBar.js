import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../store/actions';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  handleLogout = () => {
    this.props.logout();
  };
  render() {
    return (
      <nav>
        <Link to="/" className= "nav-button">Feed</Link>
        <Link to="MyCats" className="nav-button">My Cats</Link>
        <Link to="NewCat" className="nav-button">New Cat</Link>
        {this.props.isLoggedIn ? (
          <button className="logout-button" onClick={this.handleLogout}>Logout</button>
        ) : null}
        {!this.props.isLoggedIn ? (
          <Link to="Signup" className="signup-button">Signup</Link>
        ) : null}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.user
  };
}

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
