import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import Splash from '../assets/splash.png';

class Landing extends Component {
    constructor(props) {
      super(props);
    } 
      render() {
          return (
           <div style={{margin:'auto', alignSelf:'center', alignContent:'center', justifyContent:'center'}}>
            
            <img src={Splash} height="200vh"  style={{ marginTop:'5%', alignSelf:'center'}}></img>
          <br></br>
            <img src={Logo} height="50vh"  style={{ margin:'1.5%'}}></img>
            <div style={{fontFamily:'Arial', fontSize:20, fontWeight:'500', color:'#717171'}}>Learn Sign Language for Free. Interactively.</div>
            <div style={{borderRadius:20,backgroundColor:'#274968', color:'#FFF', width:'15%', height:'5vh', fontFamily:'Helvetica',textAlign:'center', fontWeight:'600', paddingTop:'1%', alignSelf:'center', justifyContent:'center', marginLeft:'42%', marginTop:'5%'}}><Link to="/register" style = {{textDecoration: 'none', color:"#FFFFFF"}}>REGISTER</Link></div>
           <div style={{borderRadius:20,borderWidth:2, borderStyle:'double', backgroundColor:'#FFF', color:'#274968', width:'15%', height:'5vh', fontFamily:'Helvetica',textAlign:'center', fontWeight:'600', paddingTop:'1%', alignSelf:'center', justifyContent:'center', marginLeft:'42%', marginTop:'1.75%'}}><Link to="/login" style = {{textDecoration: 'none', color: "#274968"}}> LOGIN</Link></div>
     
          

  
  
  
  
           </div>   
          );
      }
  }
  
  export default Landing;