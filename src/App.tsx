import React,{useEffect} from 'react';
import './App.css';
import Routing from './Routing'
import firebase from './firebase'


function App() {

  useEffect(()=>{
    const messaging = firebase.messaging()
   messaging.requestPermission().then(()=>{
   return messaging.getToken()
   }).then((token)=>{
     console.log("token", token)
    //  alert(token)  
     prompt('token', token)
   })
  },[])

  return (
    <div className="App">
     <Routing/>
    </div>
  );
}

export default App;
