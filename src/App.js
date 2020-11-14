import React from 'react';
import './App.css';
import Home from './Home'
import Post from './Post'
import Login from './Login'
import Item from './Item'
import fire from './fire'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Tablets from './Tablets';
import Mobile from './MobilePhones'
import Cars from './Cars'
import Motorcycles from './Motorcycles'
import TV from './TV'
import Houses from './Houses'
import Land from './Land'
class App extends React.Component {
  constructor(props) {   
    super(props);  
    this.state = {Adslist : []}
    }   
  componentDidMount() {    
      fire.database().ref("Ads").on("value", snapshot => {
        let Adlist = [];
        snapshot.forEach(snap => {
            Adlist.push(snap.val());
        });
        this.setState({Adslist:Adlist});
      });   
 } 
  render(){
  return (
    <Router>
    	<Route exact path="/" component={Home} ><Home data={this.state.Adslist}/></Route>
      <Route  path="/post" component={Post}></Route> 
      <Route  path="/login" component={Login}></Route> 
      <Route  path="/item/:itemname"><Item data={this.state.Adslist} /></Route> 
      <Route  path="/tablets" component={Tablets}><Tablets data={this.state.Adslist} /></Route>
      <Route  path="/mobilephones" component={Mobile}><Mobile data={this.state.Adslist} /></Route>
      <Route  path="/cars" component={Cars}><Cars data={this.state.Adslist} /></Route>
      <Route  path="/motorcycles" component={Motorcycles}><Motorcycles data={this.state.Adslist} /></Route>
      <Route  path="/TV - Video - Audio" component={TV}><TV data={this.state.Adslist} /></Route>
      <Route  path="/houses" component={Houses}><Houses data={this.state.Adslist} /></Route>
      <Route  path="/land&plots" component={Land}><Land data={this.state.Adslist} /></Route>
    </Router>
  );
}
}

export default App;
