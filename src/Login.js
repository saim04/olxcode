import React from 'react'
import {facebook_login} from './store/action'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './props.css'
class Login extends React.Component {
	
	render(){
	
	return (		
		<div>
			<div className="header flex aic">	
	  				<Link to="/">
	  					<button className="fas fa-arrow-left mr-4 s20"/>
					</Link>
	  				<div>
						<Link to="/">
							<div className="logo">
								<img src="https://www.romaniajournal.ro/wp-content/uploads/2020/04/OLX_Rebranding.png"/>
							</div>
						</Link>
					</div>
				</div>
	  		<div className="home container aic" style={{textAlign:"center",position:"relative",top:"200px"}}>
	  			<h2 className="fontb mt-3">Wanna Sell?</h2>	
	  			<h5 className="fontb mt-3">Login with Facebook to sell on OLX.</h5>
	 			<button style={{width:"200px",height:"40px",backgroundColor:"#002f34",color:"white",borderRadius:"30px",border:"0px"}}
	 			className="button mt-3" onClick={()=>this.props.facebook_login(this.props.history)}>
	 				Login With Facebook
	 			</button>
	  		</div>
	 	</div>
	);
}
}
const mapStateToProps = (state) => ({
	current_user:state.current_user,
	users:state.users
})
const mapDispatchToProp =(dispatch)=>({
	facebook_login:(history)=>dispatch(facebook_login(history))
})
export default connect(null,mapDispatchToProp) (Login);