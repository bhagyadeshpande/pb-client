import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showPlantDetails extends Component {
  
  constructor(props) {
    super(props);       
    this.state = {
      plant: {}
    };        
  }  
     componentDidMount = () =>{
      const path = window.location.pathname;
      const lastItem = path.split("/");
      const len = (lastItem.length)-1;
      const plantId = lastItem[len];         
    axios
      .get(`http://localhost:8082/api/plants/${plantId}`)
      .then(res => {        
         this.setState({          
          plant: res.data          
        })       
      })
      .catch(err => {
        console.log("Error from ShowPlantDetails");
      })
    }
    

  onDeleteClick (id) {
      axios
      .delete('http://localhost:8082/api/plants/'+id)
      .then(res => {
        alert("Selected plant is deleted from the list!");
        window.location.href = "/";
      })
      .catch(err => {
        console.log("Error form ShowPlantDetails_deleteClick");
      })
  };

  render() {
      const plant = this.state.plant;
    let PlantItem = <div>
      <table className="table table-hover table-dark">               
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Name</td>
            <td>{ plant.name}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Scientific Name</td>
            <td>{ plant.scientificName }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Category</td>
            <td>{ plant.category }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Description</td>
            <td>{ plant.description }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Price</td>
            <td>{ plant.price }</td>
          </tr>         
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowPlantDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Plant List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Plant's Details</h1>
              <p className="lead text-center">
                  View Plant's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { PlantItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" 
              onClick={this.onDeleteClick.bind(this,plant._id)}>Delete Plant</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-plant/${plant._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Plant Details
              </Link>
              <br />
            </div>
          </div>         
        </div>
      </div>
          );
  }
}

export default showPlantDetails;
