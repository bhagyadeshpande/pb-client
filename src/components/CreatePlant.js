import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreatePlant extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      scientificName:'',
      category:'',
      description:'',
      price:0      
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      scientificName: this.state.scientificName,
      category: this.state.category,
      description: this.state.description,
      price: this.state.price
    };

    axios
      .post('http://localhost:8082/api/plants', data)
      .then(res => {
        this.setState({
          name: '',
          scientificName:'',
          category:'',
          description:'',
          price:0          
        })
        alert("New Plant has been added successfully!");
        window.location.href = "/";
      })
      .catch(err => {
        console.log("Error in CreatePlant!");
      })
  };

  render() {
    return (
      <div className="CreatePlant">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Plants List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Plant</h1>
              <p className="lead text-center">
                  Create new plant
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Name of the Plant'
                    name='name'
                    className='form-control'
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='scientific name'
                    name='scientificName'
                    className='form-control'
                    value={this.state.scientificName}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='category'
                    name='category'
                    className='form-control'
                    value={this.state.category}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Describe this plant'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='price'
                    name='price'
                    className='form-control'
                    value={this.state.price}
                    onChange={this.onChange}
                  />
                </div>
               
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePlant;