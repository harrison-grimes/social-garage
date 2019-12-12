import React from 'react'

export default class CreateCar extends React.Component {
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
      const {createNewCar} = this.props;
      return (
      <div className = "new-car-entry">
        <h3>Add a New Car</h3>
        <label>
          Car Name
          <input type="text" name="name" onChange={this.handleChange}/>
        </label>
        <label>
          Car Image Url
          <input type="text" name="url" onChange={this.handleChange}/>
        </label>
        <label>
          Car Bio
          <textarea 
            name="bio" 
            id="" 
            cols="30" 
            rows="10" 
            onChange={this.handleChange}/>
        </label>
        <button
          onClick={() =>
            createNewCar({
              name: this.state.name,
              url: this.state.url,
              bio: this.state.bio
            })
          }>
            Create Car
          </button>
      </div>
      )}
  }