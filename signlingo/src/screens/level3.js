import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import Splash from '../assets/splash.png';
import axios from 'axios';

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

class Level3 extends Component {
    componentDidMount(){
        this.getAlphabet(false);
    }
   
    handleTakePhoto (dataUri) {
        setTimeout(() => console.log(dataUri), 6000)
        //var res = this.dataURItoBlob(dataUri)
        //console.log(res)
        var img = dataUri.split("data:image/png;base64,");
        this.sendQuiz(img[1]);
      }
     getAlphabet(a) {
          if(a==false){
             var text = "";
        var possible = "EBC";    
        text = possible.charAt(Math.floor(Math.random() * possible.length));
        this.setState({alpha:text})
        console.log(text)
        this.setState({incorrect:false})
        this.setState({correct:false})
        console.log(this.state)
          }
          else{
            this.setState({incorrect:false})
            this.setState({correct:false})
          }
      
       
      }

      sendQuiz(img){
        console.log(typeof(img))
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: {"img":img}
        // };
        // fetch("https://us-central1-snappy-frame-287205.cloudfunctions.net/predict",requestOptions)
        // .then(res => res.json())
        // .then(
        //   (result) => {
        //     console.log(result);
        //   },
        //   (error) => {
        //     this.setState({
        //       isLoaded: true,
        //       error
        //     });
        //   }
        // )
        axios.post('https://us-central1-snappy-frame-287205.cloudfunctions.net/predict', {"image":img})
      .then(res => {
        console.log(res.data.prediction);
        if(res.data.prediction==this.state.alpha){
          this.setState({correct:true})
          if (window.sessionStorage.getItem("level3") == null){
              window.sessionStorage.setItem("level3", 100);
            }
            else{
              window.sessionStorage.setItem("level3", parseInt(window.sessionStorage.getItem("level3")) + 100);
            }
        }
        else{
          this.setState({incorrect:true})
        }
      })
      }
      

    //  dataURItoBlob(dataURI) {
    //     // convert base64/URLEncoded data component to raw binary data held in a string
    //     var byteString;
    //     if (dataURI.split(',')[0].indexOf('base64') >= 0)
    //         byteString = atob(dataURI.split(',')[1]);
    //     else
    //         byteString = unescape(dataURI.split(',')[1]);
    
    //     // separate out the mime component
    //     var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    
    //     // write the bytes of the string to a typed array
    //     var ia = new Uint8Array(byteString.length);
    //     for (var i = 0; i < byteString.length; i++) {
    //         ia[i] = byteString.charCodeAt(i);
    //     }
    
    //     return new Blob([ia], {type:mimeString});
    // }
    constructor(props) {
      super(props);
      this.state = {
          alpha: null,
          correct: false,
          incorrect: false,
        };
      }
      render() {
        if (window.sessionStorage.getItem("userid") == null){
            this.props.history.push("/login");
            return null;
        }
          return (
           <div style={{margin:'auto', alignSelf:'center', alignContent:'center', justifyContent:'center', height:'70vh'}}>
            <div style={{height:'10vh', backgroundColor:'#ffffff'}}>
            <img src={Logo} height="24vh"  style={{ margin:'1.5%', float:'left', marginLeft:'5%'}}></img>
            
            <Link to="/logout"><div style={{fontFamily:'Helvetica', fontSize:20, fontWeight:'600', color:'#717171', paddingTop:'1.5%', float:'right', marginRight:'5%'}}>Logout</div></Link>
            <Link to="/home"><div style={{fontFamily:'Helvetica', fontSize:20, fontWeight:'600', color:'#717171', paddingTop:'1.5%', paddingRight:'1.5%', float:'right' ,marginRight:'1.5%'}}>Home</div></Link></div>
            <hr/>
          <br></br>
          
          
         
      
          {!this.state.incorrect && !this.state.correct &&
          <div style={{backgroundColor:'#FFFFFF', height:'90vh', marginTop:'-1%'}}>
          <div style={{fontFamily:'Helvetica', fontSize:25, fontWeight:'300', color:'#717171', paddingTop:'5%'}}>What's the ASL sign for</div>
          <br></br>
          <div style={{fontFamily:'Helvetica', fontSize:50, fontWeight:'500', color:'#274968'}}>{this.state.alpha}</div>
          <Camera
      onTakePhoto = { (dataUri) => { this.handleTakePhoto(dataUri); } }
    />
       </div>  
      } 
    { !this.state.incorrect && this.state.correct &&
    <div style={{backgroundColor:'#FFF', marginTop:'1.4%', marginLeft:'40%', alignSelf:'center', width:'20%',paddingTop:'5%',paddingBottom:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
          
         <div style={{fontFamily:'Helvetica', fontSize:20, color:'#274968', fontWeight:600}}> Correct Answer!</div>
         <div style={{fontFamily:'Helvetica', fontSize:30, color:'#274968', fontWeight:800}}> +100 points</div>
          <div style={{fontFamily:'Helvetica', fontSize:20, fontWeight:500, backgroundColor:'#274968', color:'#FFF', width:'70%', borderRadius:10, height:'5%', paddingTop:'2%',paddingBottom:'2%', marginTop:'5%', marginLeft:'12.5%', marginBottom:'15%',paddingBottom:'2%'}} onClick={()=>this.getAlphabet(this.state.incorrect)}>Next question</div>
          
    </div>
    }
    { this.state.incorrect && !this.state.correct && 
   <div style={{backgroundColor:'#FFF', marginTop:'1.4%', marginLeft:'40%', alignSelf:'center', width:'20%',paddingTop:'5%',paddingBottom:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
          
   <div style={{fontFamily:'Helvetica', fontSize:20, color:'#274968', fontWeight:600}}> Incorrect!</div>
    <div style={{fontFamily:'Helvetica', fontSize:20, fontWeight:500, backgroundColor:'#274968', color:'#FFF', width:'70%', borderRadius:10, height:'5%', paddingTop:'2%',paddingBottom:'2%', marginTop:'5%', marginLeft:'12.5%', marginBottom:'15%',paddingBottom:'2%'}} onClick={()=>this.getAlphabet(this.state.incorrect)}>Try again</div>
    
</div>
    }
       
           </div>   
          );
      }
  }
  
  export default Level3;