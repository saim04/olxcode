import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

const Item =({data})=>{
    const {itemname}=useParams();
    return(
        <div>
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
				              <Link to="/houses" className="nav-link">Houses</Link>
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
            {data
            .filter(card=>card.itemname===itemname).map((card,index)=>(
                <div key={index} className="main container-fluid">
                    <div className="categ flex p-3 ml-3">
                        <Link to="/">
                            <h5> Home </h5>
                        </Link>
                        <h5 className="ml-2"> / </h5>
                        <Link to="/">
                            <h5 className="ml-2">{card.Category}</h5>
                        </Link>
                    </div>
                    <div className="container-fluid flex mb-5">
                    <div id="carouselExampleControls" className="main-slide carousel slide" style={{border:"1px solid #ccd5d6",borderRadius:"4px"}} data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item main_slide active">
                                        <img src={card.imgurl1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item main_slide">
                                        <img src={card.imgurl2} className="d-block w-100" alt="..." />
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
                            <div className="itemdesc">
                                <div className="container ml-2 mt-2" style={{border:"1px solid #ccd5d6",padding:"10px",borderRadius:"4px"}}>
                                    <div>
                                    <h2 className="fontb">Rs {card.price}</h2>
                                    </div>
                                    <div>
                                    <h4 style={{color:"#004f34A3",fontWeight:"300",fontSize:"20px"}} className="">{card.itemname}</h4>
                                    </div>
                                    <div>
                                    <h4 style={{color:"#004f34A3",fontWeight:"280",fontSize:"15px"}} className="">{card.location}</h4>
                                    </div>
                                </div>
                                <div className="container ml-2 mt-2" style={{border:"1px solid #ccd5d6",padding:"10px",borderRadius:"4px"}}>
                                    <div>
                                    <h4 className="font">Seller description</h4>
                                    </div>
                                    <div className="flex aic">
                                    <div>
                                    <h2><img style={{borderRadius:"30px"}} src={card.user_info.profile}/></h2>
                                    </div>
                                    <div>
                                    <h5 className="fontb ml-1">{card.user_info.name}</h5>
                                    </div>                                    
                                    </div>
                                    <div>
                                    <h4>{card.phone}</h4>
                                    </div>
                                    <div>
                                    <h4 style={{color:"#004f34A3",fontWeight:"300",fontSize:"20px"}} className="">{card.itemname}</h4>
                                    </div>
                                    <div>
                                    <h4 style={{color:"#004f34A3",fontWeight:"280",fontSize:"15px"}} className="">{card.location}</h4>
                                    </div>
                                </div>
                                <div className="container ml-2 mt-2" style={{border:"1px solid #ccd5d6",padding:"10px",borderRadius:"4px"}}>
                                    <div>
                                    <h4 className="font">Item description</h4>
                                    </div>
                                    <div>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            ))}
            
			<div className="jumbotron jumbotron-fluid footer_linked">
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
        </div>
    )
}

export default Item;