import firebase from "firebase";
import React from "react"
import Firebase from '../../fire'

const facebook_login =(history)=>{
	return (dispatch) =>{
		var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        let create_user={
        	name:user.displayName,
        	email:user.email,
        	profile:user.photoURL,
        	uid:user.uid
        }
        firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
        .then(()=>{
            dispatch({type:"SETUSER",payload:create_user})
        	alert("User Logged In Succesfully")
            history.push("./post")
        })
      }).catch(function(error) {
        console.log(error);
      });
	}
}
const get_users =()=>{
    let users=[];
    return (dispatch) =>{
        firebase.database().ref('/').child('users').on('child_added',(data)=>{
            users.push(data.val())
        })
        dispatch({type:"SETFBUSERS",payload:users})
    }
}
export {
	facebook_login,
    get_users
};