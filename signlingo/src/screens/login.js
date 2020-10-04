import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import Slide from '../assets/slide.png';

class Login extends Component {
    constructor(props) {
      super(props);
    } 
      render() {
          return (
           <div style={{margin:'auto', alignSelf:'center', alignContent:'center', justifyContent:'center'}}>
           <div style={{float:'right', width:'60%',alignSelf:'center', verticalAlign:'middle', paddingTop:'15%', backgroundColor:'#F7F9FB', height:'69vh'}}>
            <img src={Slide} height="300vh"  style={{ margin:'1.5%', alignSelf:'center'}}></img>
          <br></br>
    
            <div style={{fontFamily:'Work Sans', fontSize:40, fontWeight:'800', color:'#2D3748'}}>Learn Sign Langauge interactively.</div>
     
          </div>
            <div style={{float:'left', width:'40%'}}>
            <div style={{fontFamily:'Work Sans', fontSize:60, fontWeight:'800', color:'#2D3748', marginTop:'30%'}}>Login</div>
            <input type="text" name="name" placeholder="Email" style={{width:'60%', fontSize:20, borderColor:'#F7F9FB', borderRadius:10, backgroundColor:'#F7F9FB', marginTop:'15%', padding:'2.5%'}} />
            <input type="password"  name="name" placeholder="Password" style={{width:'60%', fontSize:20, borderColor:'#F7F9FB', borderRadius:10, backgroundColor:'#F7F9FB', marginTop:'5%' , padding:'2.5%'}} />
            
            <Link to="/home"> <div style={{borderRadius:20,backgroundColor:'#274968', color:'#FFF', width:'40%', height:'5vh', fontFamily:'Work Sans',textAlign:'center', fontWeight:'600', paddingTop:'2.5%', alignSelf:'center', justifyContent:'center', marginLeft:'30%', marginTop:'5%'}}>LOGIN</div></Link>
            </div>
          

  
  
  
  
           </div>   
          );
      }
  }
  
  export default Login;