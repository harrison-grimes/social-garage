import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteCat, editCat } from '../services/cats';

export default class Cat extends Component {
  render() {
    const { cat, user } = this.props;

    return (
      <div className="cat-card" key={cat._id}>
          <h4>{cat.name}</h4>
          <img src={cat.url} className="cat-pic" alt="profile pic"/>
          <p>{cat.bio}</p>
        {cat.owner === user.id && (
        <>
          <button onClick={() =>  <Link to= "/edit"></Link>}>Edit</button>
          <button onClick={() => this.props.deleteCat(cat._id)}>Delete</button>
        </>
    )}
      </div>
    );
  }
}
