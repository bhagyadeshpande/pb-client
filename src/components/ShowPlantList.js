import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PlantCard from './PlantCard';

class ShowPlantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: []
    };
  }

  componentDidMount() {    
    axios
      .get("https://plantboutique.herokuapp.com/api/plants")
      .then(res => {
          this.setState({         
          plants: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowPlantList');
      })
  };


  render() {
    const plants = this.state.plants;
    let plantList;

    if(!plants) {
      plantList = "there is no plant record!";
    } else {
      plantList = plants.map((plant, k) =>        
        <PlantCard plant={plant} key={k} />        
      );
    }

    return (
      <div className="ShowPlantList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Plants List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-plant" className="btn btn-outline-warning float-right">
                + Add New Plant
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className="list">
                {plantList}
          </div>          
        </div>
      </div>
    );
  }
}

export default ShowPlantList;