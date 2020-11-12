import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import App from './App'
class Ads extends React.Component{
 render(){
 	return(
 		<> 
 			<div className="container m-4">
	      		<h3 className="">Fresh recommendations</h3>
	      	</div>
	      	<div className="MainDiv m-2 container">     
            	{this.props.data.map((card,index)=>(
                    
                    <div key={index} className="card ml-3" style={{width: '18rem'}}>
                    <img src={card.imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title fontb">Rs {card.price}</h5>
                    <h5 className="card-title s16">{card.itemname}</h5>
                    </div> 
                    <Link to={`/item/${card.itemname}`}>Go</Link>  
                    </div>
                     
                ))}	
    		</div>
    	</>
 	);
}
}
export default Ads;