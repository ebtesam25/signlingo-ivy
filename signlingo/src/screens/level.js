import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import L1 from '../assets/1.png';
import L2 from '../assets/2.png';
import L3 from '../assets/3.png';

class Level extends Component {
    constructor(props) {
      super(props);
    } 
      render() {
          return (
           <div style={{margin:'auto', alignSelf:'center', alignContent:'center', justifyContent:'center', height:'90vh'}}>
            <div style={{borderBottomColor:'#F7F9FB', borderBottomStyle:'outset', height:'10vh'}}>
            <img src={Logo} height="30vh"  style={{ margin:'1.5%', float:'left', marginLeft:'5%'}}></img>
            
            <div style={{fontFamily:'Work Sans', fontSize:30, fontWeight:'600', color:'#717171', paddingTop:'1.5%', float:'right', marginRight:'5%'}}>Logout</div>
            <Link to="/level">  <div style={{fontFamily:'Work Sans', fontSize:30, fontWeight:'600', color:'#717171', paddingTop:'1.5%', float:'right' ,marginRight:'1.5%'}}>Home</div></Link>
            </div>
          <br></br>
          
          <div style={{backgroundColor:'#ededed', marginTop:'-1%', display:'block', height:'88vh'}}>
           
            <div style={{fontFamily:'Work Sans', fontSize:50, fontWeight:'600', color:'#717171', paddingTop:'5%'}}>Which level do you want to practice today?</div> <br></br>
           
            <Link to="/level1"> <div style={{float:'left',backgroundColor:'#FFF', marginTop:'5%', marginLeft:'15%', width:'20%',paddingTop:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
           <h1 style={{fontFamily:'Roboto', fontSize:50, color:'#274968'}}>Level 1</h1>
            <img src={L1}></img>
            <h1 style={{fontFamily:'Roboto', fontSize:30, color:'#274968'}}>0 points earned</h1>
            </div></Link>


            <Link to="/level2"> <div style={{float:'left',backgroundColor:'#FFF', marginTop:'5%', marginLeft:'5%', width:'20%',paddingTop:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
           <h1 style={{fontFamily:'Roboto', fontSize:50, color:'#274968'}}>Level 2</h1>
            <img src={L2}></img>
            <h1 style={{fontFamily:'Roboto', fontSize:30, color:'#274968'}}>0 points earned</h1>
            </div></Link>


            <Link to="/level3"><div style={{float:'left',backgroundColor:'#FFF', marginTop:'5%', marginLeft:'5%', width:'20%',paddingTop:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
           <h1 style={{fontFamily:'Roboto', fontSize:50, color:'#274968'}}>Level 3</h1>
            <img src={L3}></img>
            <h1 style={{fontFamily:'Roboto', fontSize:30, color:'#274968'}}>100 points earned</h1>
            </div></Link>

            
         
     
          </div>

  
  
  
  
           </div>   
          );
      }
  }
  
  export default Level;