import React, {Component} from 'react';
import { Jumbotron } from 'reactstrap';
import '../index.css';
import img from '../assets/2.jpg';


const jumbStyle = {
  backgroundImage: 'url(' + img + ')',

}

class Landing extends Component{
  render(){
    return(  
        
        <div>
          
	  <Jumbotron className="mainSlide">
        <h1 className="display-3">Express-Food</h1>
        
        
      </Jumbotron>


</div>


    )
  }

}


export default Landing