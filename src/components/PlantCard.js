import React from 'react';
//import { Link } from 'react-router-dom';
import '../App.css';
import { Link } from 'react-router-dom';

const PlantCard = (props) => {
    const  plant  = props.plant;   
   
    return(
            <div className="card-container">
            <img src="../images/rose.jpg" alt="" />            
            <div className="desc">
               <h2>           
               <Link to={`/show-plant/${plant._id}`}>    
               {plant.name}  
               </Link>
               </h2>
                <h3>{plant.scientificName}</h3>
                <h3>{plant.category}</h3>                
            </div>            
            </div>              
    )              
};
                                   
export default PlantCard;
