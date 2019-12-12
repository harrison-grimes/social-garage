import React from 'react';
import editCar from '../store/actions';


export default class Edit extends React.Component {
  state = {
    name: '',
    url: '',
    bio: ''
  };

  handleChange = (event) => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
      const {editCar} = this.props;
      return (
      <div className = "new-car-entry">
        <h3>Add a New Car</h3>
        <label>
          Car Name
          <input type="text" name="name" onChange={this.handleChange}/>
        </label>
        <label>
          Cat Image Url
          <input type="text" name="url" onChange={this.handleChange}/>
        </label>
        <label>
          Cat Bio
          <textarea 
            name="bio" 
            id="" 
            cols="30" 
            rows="10" 
            onChange={this.handleChange}/>
        </label>
        <button
          onClick={() =>
            editCat({
              name: this.state.name,
              url: this.state.url,
              bio: this.state.bio
            })
          }>
            Edit car
          </button>
      </div>
      )}
  }