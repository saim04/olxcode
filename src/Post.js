import React from 'react';
import {Link} from 'react-router-dom'
import fire from './fire'
import './props.css'
import {connect} from 'react-redux'
import {get_users} from './store/action'

class Post extends React.Component{
	state={
    itemname : "",
    price:"",
    imgurl:"",
    location:"",
    description:"",
    Category:"",
    user_info:""
  }

  handleText=e=>{
    this.setState({
      [e.target.name] : e.target.value,
      user_info:this.props.current_user
    })
  }
  handleSubmit=e=>{
    let messageRef = fire.database().ref('Ads').orderByKey().limitToLast(100);
    fire.database().ref('Ads').push({itemname:this.state.itemname,
									    	price:this.state.price,
									    	imgurl:this.state.imgurl,
									    	location:this.state.location,
									    	description:this.state.description,
									    	Category:this.state.Category,
									    	user_info:this.state.user_info});
    this.setState({
      itemname : "",
	  price:"",
	  imgurl:"",
	  location:"",
	  description:""
    })
  }
  
  render(){	
  let user=this.props.current_user;
  console.log(this.props.current_user)          		
  return (
  			<div>
  				<div className="header flex aic">	
	  				<Link to="/">
	  					<button className="fas fa-arrow-left mr-4 s20"/>
					</Link>
	  				<div>
						<Link to="/">
							<div className="logo">
								<img src="https://www.romaniajournal.ro/wp-content/uploads/2020/04/OLX_Rebranding.png" />
							</div>
						</Link>
					</div>
				</div>
				<div className="head m-4">
				<div className="tc">
					<img style={{borderRadius:"30px"}} onChange={this.handleText} name="img" src={user.profile} />
					<h6 className="fontb mt-1">{user.name}</h6>
					<h6 className="fontb">{user.email}</h6>
					<h6 className="fontb">{user.uid}</h6>
				</div>					
				<h5 className="tc fontb">POST YOUR AD</h5>
				</div>
				<div className="container">
				  <form>
				  			<div className="form-group row">
					          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Item Name</label>
					          <div className="col-sm-10">
					            <input onChange={this.handleText} name="itemname" type="text" className="form-control" required id="inputPassword" placeholder="Name of your Item"/>
					          </div>
				        	</div>
					        <div className="form-group row">
					          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Item Category</label>
					           <div className="col-sm-10">
						           <select name="Category" onChange={this.handleText} class="custom-select" id="inputGroupSelect01">
						           			<option selected value="c" disabled>Select Category...</option>
										    <option value="Mobile Phones">Mobile Phones</option>
										    <option value="Cars">Cars</option>
										    <option value="Motorcycles">Motorcycles</option>
										    <option value="Houses">Houses</option>
										    <option value="TV - Video - Audio">TV - Video - Audio</option>
										    <option value="Tablets">Tablets</option>
										    <option value="Land & Plots">Land & Plots</option>
								    </select>
							    </div>
				        	</div>
				        	<div className="form-group row">
					          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Item Prize</label>
					          <div className="col-sm-10">
					            <input type="number" onChange={this.handleText} name="price" className="form-control" required id="inputPassword" placeholder="Set Prize"/>
					          </div>
				        	</div>
				        	<div className="form-group row">
					          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Item Image</label>
					          <div className="col-sm-10">
					            <input type="text" className="form-control"onChange={this.handleText}  onChange={this.handleText} name="imgurl" required id="inputPassword" placeholder="Image URL"/>
					          </div>
				        	</div>
				        	<div className="form-group row">
					          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Locations</label>
					          <div className="col-sm-10">
					            <input type="text" className="form-control"onChange={this.handleText}  name="location" required id="inputPassword" placeholder="Current Location"/>
					          </div>
				        	</div>
				        	<div className="form-group row">
					          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Item Description</label>
					          <div className="col-sm-10">
					             <textarea type="text" name="description"onChange={this.handleText}  required placeholder="Write description about your Item" required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
					          </div>
				        	</div>	
				        	<Link to="/"><button type="submit" onClick={this.handleSubmit} className="ml-2 btn btn-primary submit">Post Now</button></Link>
			      </form>
			       <Link to="/"><button className="btn btn-primary submit">Cancel</button></Link>
			       	
				</div>
			</div>
			      
			
  )
  }
}
const mapStateToProps = (state) => ({
	current_user:state.current_user,
	users:state.users
})
export default connect(mapStateToProps,null) (Post);