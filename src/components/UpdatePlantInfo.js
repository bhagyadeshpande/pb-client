import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdatePlantInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id:'',
      name: '',
      scientificName:'',
      category:'',
      description:'',
      price:null
    };     
  }
  
  componentDidMount = () => {       
    const path = window.location.pathname;
    const lastItem = path.split("/");
    const len = (lastItem.length)-1;
    const plantId = lastItem[len];   
    axios
    .get(`https://plantboutique.herokuapp.com/api/plants/${plantId}`)
    .then(res => {   
        this.setState({
        id:res.data._id,
        name: res.data.name,
        scientificName:res.data.scientificName,
        category:res.data.category,
        description:res.data.description,
        price:res.data.price         
      }) 
    })
    .catch(err => {
      console.log("Error from updatePlantDetails");
    })
  }

  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  onSubmit = e => {
    e.preventDefault();

    // eslint-disable-next-line no-unused-vars
    const data = {
      id:this.state.id,
      name: this.state.name,
      scientificName: this.state.scientificName,
      category: this.state.category,
      description: this.state.description,
      price: this.state.price
    };
    
    axios
      .put(`https://plantboutique.herokuapp.com/${data.id}`, data)
      .then(res => {      
           alert("Plant details have been updated successfully!");       
           window.location.href=`/show-plant/${data.id}`
      })
      .catch(err => {
        console.log("Error in UpdatePlantInfo!");
      })
  };

  render() {
    return (
      <div className="UpdatePlantInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Plant List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Plant Details</h1>
              <p className="lead text-center">
                  Update Plant's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>          
              <div className='form-group'>
              <label htmlFor="name">Name</label>
              <input
                type='text'
                defaultValue= {this.state.name}
                name='name'
                className='form-control'              
                onChange={(event) => 
                  {this.setState({name : event.target.value})}}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="scientificName">Scietific Name</label>
              <input
                type='text'
                defaultValue={this.state.scientificName}
                name='scientificName'
                className='form-control'
                onChange={(event) => 
                  {this.setState({scientificName : event.target.value})}}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="category">Category</label>
              <input
                type='text'
                defaultValue={this.state.category}
                name='category'
                className='form-control'
                onChange={(event) => 
                  {this.setState({category : event.target.value})}}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                defaultValue={this.state.description}
                name='description'
                className='form-control'
                onChange={(event) => 
                  {this.setState({description : event.target.value})}}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="price">Price</label>
              <input
                type='number'
                defaultValue={this.state.price}
                name='price'
                className='form-control'                
                onChange={(event) => 
                  {this.setState({price : event.target.value})}}
              />
            </div>          
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Plant</button>
            <br></br>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatePlantInfo;

