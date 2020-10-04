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
            
            <img src={Splash} height="300vh"  style={{ margin:'1.5%', alignSelf:'center'}}></img>
          <br></br>
            <img src={Logo} height="70vh"  style={{ margin:'1.5%'}}></img>
            <div style={{fontFamily:'Work Sans', fontSize:30, fontWeight:'500', color:'#717171'}}>Learn Sign Langauge for Free. Real-time.</div>
           <Link to="/register"> <div style={{borderRadius:20,backgroundColor:'#274968', color:'#FFF', width:'15%', height:'5vh', fontFamily:'Work Sans',textAlign:'center', fontWeight:'600', paddingTop:'1%', alignSelf:'center', justifyContent:'center', marginLeft:'42%', marginTop:'5%'}}>REGISTER</div></Link>
           <Link to="/login"> <div style={{borderRadius:20,borderWidth:2, borderStyle:'double', backgroundColor:'#FFF', color:'#274968', width:'15%', height:'5vh', fontFamily:'Work Sans',textAlign:'center', fontWeight:'600', paddingTop:'1%', alignSelf:'center', justifyContent:'center', marginLeft:'42%', marginTop:'1.75%'}}>LOGIN</div></Link>
     
          

  
  
  
  
           </div>   
          );
      }
  }
  
  export default Landing;