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
           <div style={{margin:'auto', alignSelf:'center', alignContent:'center', justifyContent:'center', height:'70vh'}}>
            <div style={{height:'10vh', backgroundColor:'#ffffff'}}>
            <img src={Logo} height="24vh"  style={{ margin:'1.5%', float:'left', marginLeft:'5%'}}></img>
            <Link to="/login"><div style={{fontFamily:'Helvetica', fontSize:20, fontWeight:'600', color:'#717171', paddingTop:'1.5%', float:'right', marginRight:'5%'}}>Logout</div></Link>
            <Link to="/home"><div style={{fontFamily:'Helvetica', fontSize:20, fontWeight:'600', color:'#717171', paddingTop:'1.5%', paddingRight:'1.5%', float:'right' ,marginRight:'1.5%'}}>Home</div></Link>
               </div>
            <hr/>
          <br></br>
          
          
          <div style={{backgroundColor:'#FFFFFF', marginTop:'-1%', display:'block', height:'88vh'}}>
           
            <div style={{fontFamily:'Helvetica', fontSize:30, fontWeight:'600', color:'#717171', paddingTop:'3%'}}>Which level do you want to practice today?</div> <br></br>
           
            <Link to="/level1"> <div style={{float:'left', backgroundColor:'#FFF', marginTop:'5%', marginLeft:'15%', width:'20%',paddingTop:'1%', borderRadius:20,borderStyle:'solid', borderColor:'#8E8E8E', height:'53vh'}}>
           <h1 style={{fontFamily:'Helvetica', fontSize:30, color:'#274968'}}>Level 1</h1><br/>
            <img src={L1}></img>
            <h1 style={{fontFamily:'Helvetica', fontSize:25, color:'#274968'}}>0 points earned</h1>
            </div></Link>


            <Link to="/level2"> <div style={{float:'left', backgroundColor:'#FFF', marginTop:'5%', marginLeft:'5%', width:'20%',paddingTop:'1%', borderRadius:20,borderStyle:'solid', borderColor:'#8E8E8E', height:'53vh'}}>
           <h1 style={{fontFamily:'Helvetica', fontSize:30, color:'#274968'}}>Level 2</h1><br/>
            <img src={L2}></img>
            <h1 style={{fontFamily:'Helvetica', fontSize:25, color:'#717171'}}>0 points earned</h1>
            </div></Link>


            <Link to="/level3"><div style={{float:'left', backgroundColor:'#FFF', marginTop:'5%', marginLeft:'5%', width:'20%',paddingTop:'1%', borderRadius:20,borderStyle:'solid', borderColor:'#8E8E8E', height:'53vh'}}>
           <h1 style={{fontFamily:'Helvetica', fontSize:30, color:'#274968'}}>Level 3</h1><br/>
            <img src={L3}></img>
            <h1 style={{fontFamily:'Helvetica', fontSize:25, color:'#717171'}}>100 points earned</h1>
            </div></Link>

            
         
     
          </div>

  
  
  
  
           </div>   
          );
      }
  }
  
  export default Level;