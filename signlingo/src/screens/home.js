import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import US from '../assets/us.png';

class Home extends Component {
    constructor(props) {
      super(props);
    } 
      render() {
          return (
           <div style={{margin:'auto', alignSelf:'center', alignContent:'center', justifyContent:'center', height:'70vh'}}>
            <div style={{height:'10vh', backgroundColor:'#ffffff'}}>
            <img src={Logo} height="24vh"  style={{ margin:'1.5%', float:'left', marginLeft:'5%'}}></img>
            
            <div style={{fontFamily:'Helvetica', fontSize:20, fontWeight:'600', color:'#717171', paddingTop:'1.5%', float:'right', marginRight:'5%'}}>Logout</div>
            <div style={{fontFamily:'Helvetica', fontSize:20, fontWeight:'600', color:'#717171', paddingTop:'1.5%', paddingRight:'1.5%', float:'right' ,marginRight:'1.5%'}}>Home</div>
            </div>
            <hr/>
          <br></br>
          
          <div style={{backgroundColor:'#ffffff', marginTop:'-1%', height:'88vh'}}>
           
          <div style={{fontFamily:'Helvetica', fontSize:30, fontWeight:'600', color:'#717171', paddingTop:'3%'}}>Choose a course to get started.</div> <br></br>
            <Link to="/level"><div style={{float:'left', backgroundColor:'#FFF', marginTop:'5%', marginLeft:'15%', width:'20%',paddingTop:'1%', borderRadius:20,borderStyle:'solid', borderColor:'#8E8E8E', height:'53vh'}}>
           <h1 style={{fontFamily:'Helvetica', fontSize:30, color:'#274968'}}>ASL</h1>
            <img src={US}></img>
            <p style={{fontFamily:'Helvetica', color:'#717171', fontSize:16, margin:'2.5%', marginLeft:'10%', marginRight:'10%', marginTop:'5%', paddingBottom:'10%', textAlign:'left', wordWrap:'break-word'}}>American Sign Language (ASL) is a natural language that serves as the predominant sign language of Deaf communities in the United States and most of Anglophone Canada. </p>
            </div></Link>

            <div style={{float:'left', backgroundColor:'#FFF', marginTop:'5%', marginLeft:'5%', width:'20%',paddingTop:'2.5%', borderRadius:20,borderStyle:'dashed', borderColor:'#CACACA', height:'50vh'}}>

            </div>
            <div style={{float:'left', backgroundColor:'#FFF', marginTop:'5%', marginLeft:'5%', width:'20%',paddingTop:'2.5%', borderRadius:20,borderStyle:'dashed', borderColor:'#CACACA', height:'50vh'}}>

            </div>
         
     
          </div>

  
  
  
  
           </div>   
          );
      }
  }
  
  export default Home;