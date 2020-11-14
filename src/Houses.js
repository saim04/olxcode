import React from 'react';
import {Link} from 'react-router-dom'
class Houses extends React.Component{
    render(){
        return(
            <> 
            <div className="header flex aic">
					<Link to="/">
						<div className="logo">
							<img src="https://www.romaniajournal.ro/wp-content/uploads/2020/04/OLX_Rebranding.png" />
						</div>
					</Link>
					<div className="locat flex aic">
					<div className="fas fa-search s20" />				
					<form className="form-inline my-0">
		           		<input value="Pakistan" className="inp form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />	            
		          	</form>
		          	<div className="fas fa-chevron-down s20" />
		          	</div>
		          	<div className="col-lg-6">		          	
			        <div class="form-group search_item flex aic">
    					<input className="inp form-control" placeholder="Find Cars, Mobile Phone and more..."/>
  						<div className="fas fa-search s20" />
  					</div>
  					</div>	  				
		  				<div className="actions flex aic">
							<div>
							<Link to="/login" className="a">
							<a href="/login" className="fontb s15 login">Login</a>
							</Link>
							</div>
							<div>	
								<Link to="/login" className="a">
									<button className="btn sell aic">
										<div className='fas fa-plus s15 mr-2'/>
										<div className='fontb s15'>SELL</div>
									</button>
								</Link>
							</div>
						</div>							
				</div>

			
			<div className="nav-section">
				<nav className="navbar navbar-expand-lg navbar-light">
					<button className="btn categ aic ml-3">
						<div className='fontb s15'>ALL CATEGORIES</div>
						<div className='fas fa-chevron-down s15 ml-2'/>
					</button>
		        	<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		          	 	<span className="navbar-toggler-icon" />
			        </button>								
		        	<div className="collapse navbar-collapse" id="navbarNav">
		          		<ul className="navbar-nav">
                          <li className="nav-item">
		            			<Link to="/mobilephones" className="nav-link">Mobile Phones</Link>
		            		</li>
		            		<li className="nav-item">
		             			<Link to="/cars" className="nav-link">Cars</Link>
		            		</li>
				            <li className="nav-item">
				              <Link to="/motorcycles" className="nav-link">Motorcycles</Link>
				            </li>
				            <li className="nav-item">
				              <Link to="/houser" className="nav-link">Houses</Link>
				            </li>
				             <li className="nav-item">
				              <Link to="/TV - Video - Audio" className="nav-link">TV - Video - Audio</Link>
				            </li>
				            <li className="nav-item">
				              <Link to="/tablets" className="nav-link">Tablets</Link>
				            </li>
				            <li className="nav-item">
				              <Link to="/land&plots" className="nav-link">Land & Plots</Link>
				            </li>
		         		 </ul>
		       		</div>
	      		</nav>
	      	</div>
 			<div className="container m-4">
	      		<h4><Link to="/" style={{textDecoration:"none",color:"#002f34",fontWeight:"400"}}>Home </Link> /
                <Link to="/houses" style={{textDecoration:"none",color:"#002f34",fontWeight:"400"}}> Houses</Link></h4>
	      	</div>
	      	<div className="MainDiv m-2 container row m-auto">     
              {this.props.data.map((card,index)=>(
                    card.Category==="Houses"?
                    <div className="m-auto ml-3  ">
                <Link to={`/item/${card.itemname}`} style={{textDecoration:"none"}}>
                    <div key={index} className="card  mt-2" style={{width: '18rem'}}>
                     <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={card.imgurl1} alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={card.imgurl2} alt="Second slide" />
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
                    : ""
                ))} 
        </div>
            <div className="jumbotron jumbotron-fluid footer_linked mt-5">
  				<div className="div container-fluid flex">
   				 	<div>
   				 		<h2 className="fontb s14">POPULAR CATEGORIES</h2>
   				 		<div className="grid">
   				 			<Link to="" className="s12">Cars</Link>
   				 			<Link to="" className="s12">Flats for rent</Link>
   				 			<Link to="" className="s12">Jobs</Link>
   				 			<Link to="" className="s12">Mobile Phones</Link>
   				 		</div>
   				 	</div>
   				 	<div>
   				 		<h2 className="fontb s14">TRENDING SEARCHES</h2>
   				 		<div className="grid">
   				 			<Link to="" className="s12">Bikes</Link>
   				 			<Link to="" className="s12">Watches</Link>
   				 			<Link to="" className="s12">Books</Link>
   				 			<Link to="" className="s12">Dogs</Link>
   				 		</div>
   				 	</div>	
   				 	<div>
   				 		<h2 className="fontb s14">ABOUT US</h2>
   				 		<div className="grid">
   				 			<Link to="" className="s12">About OLX Group</Link>
   				 			<Link to="" className="s12">OLX Blog</Link>
   				 			<Link to="" className="s12">Contact Us</Link>
   				 			<Link to="" className="s12">OLX for Businesses</Link>
   				 		</div>
   				 	</div>	
   				 	<div>
   				 		<h2 className="fontb s14">OLX</h2>
   				 		<div className="grid">
   				 			<Link to="" className="s12">Help</Link>
   				 			<Link to="" className="s12">Sitemap</Link>
   				 			<Link to="" className="s12">Legal & Privacy information</Link>
   				 		</div>
   				 	</div>
   				 	<div>
   				 		<h2 className="fontb s14">FOLLOW US</h2>
   				 		<div className="ifl">
   				 			<a href="" className="s12 fab fa-facebook-f p-1"></a>
   				 			<a href="" className="s12 fab fa-twitter  p-1"></a>
   				 			<a href="" className="s12 fas fa-play p-1"></a>
   				 			<a href="" className="s12 fab fa-instagram p-1"></a>
   				 		</div>
   				 		<div className="store_img">
   				 			<a href="#">
				 				<img src="https://statics.olx.com.pk/external/base/img/appstore_2x.webp"/>
				 			</a>
				 			<a href="#">
				 				<img className="" src="https://statics.olx.com.pk/external/base/img/playstore_2x.webp"/>
				 			</a>  				 			
   				 		</div>
   				 	</div>		
  				</div>
			</div>
			<div className="jumbotron jumbotron-fluid copyright">
  				<div className="cpyright_div container-fluid flex">
   				 	<div className="col-lg-4">
   				 		<p className="s14 font">
   				 			<span className="fontb">Other Countries </span>
   				 			<a href=""> India </a> 
   				 			- <a href="">  South Africa </a> 
   				 			-<a href=""> Indonesia</a>
   				 		</p>
   				 	</div>
   				 	<div className="col-lg-4 offset-lg-4">
   				 		<p className="s14 font">
   				 			Free Classifieds in Pakistan. © 2006-2020 OLX
   				 		</p>
   				 	</div>		
  				</div>
			</div>
    	</>
    )
    }
}

export default Houses;