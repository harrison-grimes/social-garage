import React from 'react'

export default class CreateCat extends React.Component {
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
      const {createNewCat} = this.props;
      return (
      <div className = "new-cat-entry">
        <h3>Add a New Cat</h3>
        <label>
          Cat Name
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
            createNewCat({
              name: this.state.name,
              url: this.state.url,
              bio: this.state.bio
            })
          }>
            Create Cat
          </button>
      </div>
      )}
  }