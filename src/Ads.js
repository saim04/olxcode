import React,{useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import App from './App'

const Ads =(props)=>{
    const [items,setItems] = useState([]);
    const [visible,setVisible] = useState(6);

    const showMoreItems=()=>{
        setVisible((prevValue)=>prevValue+3)
    }

 	return(
 		<> 
 			<div className="container m-4">
	      		<h3 className="">Fresh recommendations</h3>
	      	</div>
	      	<div className="MainDiv m-2 container row m-auto ">     
            	{props.data.slice(0,visible).map((card,index)=>(
                    <div className="m-auto ml-3">
                <Link to={`/item/${card.itemname}`} style={{textDecoration:"none"}}>
                    <div key={index} className="card  mt-2" style={{width: '18rem'}}>
                     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 img-fluid" src={card.imgurl1} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 img-fluid" src={card.imgurl2} alt="Second slide" />
                                </div>                            
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                            </a>
                        </div>
                    <div className="card-body">
                    <h5 className="card-title fontb">Rs {card.price}</h5>
                    <h5 className="card-title s16">{card.itemname}</h5>
                    </div>  
                    </div>
                    </Link>
                    </div> 
                ))}	
    		</div>
            <div className="m-3">
                <button  className="m-auto fontb loadmore"  onClick={showMoreItems}>Load More</button>
            </div>
    	</>
 	);
}
export default Ads;