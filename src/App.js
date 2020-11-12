import React from 'react';
import './App.css';
import Home from './Home'
import Post from './Post'
import Login from './Login'
import Item from './Item'
import fire from './fire'
import {BrowserRouter as Router,Route} from 'react-router-dom';
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
      <Route  path="/item/:title"><Item data={this.state.Adslist} /></Route> 
    </Router>
  );
}
}

export default App;
