import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import L1 from '../assets/1.png';
import L2 from '../assets/2.png';
import L3 from '../assets/3.png';

import A from '../assets/asl/Sign_language_A.svg';
import B from '../assets/asl/Sign_language_B.svg';
import C from '../assets/asl/Sign_language_C.svg';
import D from '../assets/asl/Sign_language_D.svg';
import E from '../assets/asl/Sign_language_E.svg';
import F from '../assets/asl/Sign_language_F.svg';
import G from '../assets/asl/Sign_language_G.svg';
import H from '../assets/asl/Sign_language_H.svg';
import I from '../assets/asl/Sign_language_I.svg';
import J from '../assets/asl/Sign_language_J.svg';
import K from '../assets/asl/Sign_language_K.svg';
import L from '../assets/asl/Sign_language_L.svg';
import M from '../assets/asl/Sign_language_M.svg';
import N from '../assets/asl/Sign_language_N.svg';
import O from '../assets/asl/Sign_language_O.svg';
import P from '../assets/asl/Sign_language_P.svg';
import Q from '../assets/asl/Sign_language_Q.svg';
import R from '../assets/asl/Sign_language_R.svg';
import S from '../assets/asl/Sign_language_S.svg';
import T from '../assets/asl/Sign_language_T.svg';
import U from '../assets/asl/Sign_language_U.svg';
import V from '../assets/asl/Sign_language_V.svg';
import W from '../assets/asl/Sign_language_W.svg';
import X from '../assets/asl/Sign_language_X.svg';
import Y from '../assets/asl/Sign_language_Y.svg';
import Z from '../assets/asl/Sign_language_Z.svg';

class Level1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        alpha: null,
        correct: false,
        incorrect: false,
        c1: null,
        c2: null, 
        c3: null
      };
    } 
    getAlphabet(a) {
        
        if(a==false){
            console.log("Here",a);
            
           var text = "";
      var possible = "ABCDEFG";    
      text = possible.charAt(Math.floor(Math.random() * possible.length));
      this.setState({alpha:text})
      console.log(text)
      this.getCards(this.state.incorrect);
      this.setState({correct:false})
        }
        else{
          this.setState({incorrect:false})
          this.setState({correct:false})
        
        }
    
     
    }
    getCards(a) {
        
        if(a==false){
            this.setState({correct:false})
                 var text = "";
      var possible = "ABCDEFG";    
      text = possible.charAt(Math.floor(Math.random() * possible.length));
      this.setState({c1:text})
      console.log(text)

      text = possible.charAt(Math.floor(Math.random() * possible.length));
      this.setState({c2:text})
      console.log(text)

      text = possible.charAt(Math.floor(Math.random() * possible.length));
      this.setState({c3:text})
      console.log(text)
            
          
        }
        else{
          this.setState({incorrect:false})
        }
    
     
    }
    _checkAnswer(x,y){
        if(x==y){
            this.setState({correct:true});
        }
        else if(y!=this.state.c1 && y!=this.state.c2 && y!=this.state.c3 && x=="0"){
            this.setState({correct:true})
        }
        else{
            this.setState({incorrect:true});
        }

    }
    componentDidMount(){
        this.getAlphabet(false)
        this.getCards(false)
    }

      render() {
          return (
           <div style={{margin:'auto', alignSelf:'center', alignContent:'center', justifyContent:'center', height:'90vh'}}>
            <div style={{borderBottomColor:'#F7F9FB', borderBottomStyle:'outset', height:'10vh'}}>
            <img src={Logo} height="30vh"  style={{ margin:'1.5%', float:'left', marginLeft:'5%'}}></img>
            
            <Link to="/login">  <div style={{fontFamily:'Work Sans', fontSize:30, fontWeight:'600', color:'#717171', paddingTop:'1.5%', float:'right', marginRight:'5%'}}>Logout</div></Link>
            <Link to="/level">   <div style={{fontFamily:'Work Sans', fontSize:30, fontWeight:'600', color:'#717171', paddingTop:'1.5%', float:'right' ,marginRight:'1.5%'}}>Home</div></Link>
            </div>
          <br></br>
          
          <div style={{backgroundColor:'#ededed', marginTop:'-1%', display:'block', height:'88vh'}}>
          { !this.state.incorrect && !this.state.correct && <div>
            <div style={{fontFamily:'Work Sans', fontSize:50, fontWeight:'600', color:'#717171', paddingTop:'5%'}}>Which sign represents:</div> <br></br>
            <div style={{fontFamily:'Work Sans', fontSize:50, fontWeight:'600', color:'#274968'}}>{this.state.alpha}</div> <br></br>
            <div onClick={()=>this._checkAnswer("0",this.state.alpha)} style={{fontFamily:'Work Sans', fontSize:30, fontWeight:'400', color:'#717171', paddingTop:'1%'}}>It's a trick question, none</div> 
            <div onClick={()=>this._checkAnswer(this.state.c1,this.state.alpha)} style={{float:'left',backgroundColor:'#FFF', marginTop:'5%', marginLeft:'15%', width:'20%',paddingTop:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
          
            <img  height={400} width={150} src={`../asl/Sign_language_${this.state.c1}.svg`}></img>
       
            </div>


            <div onClick={()=>this._checkAnswer(this.state.c2,this.state.alpha)} style={{float:'left',backgroundColor:'#FFF', marginTop:'5%', marginLeft:'5%', width:'20%',paddingTop:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
            <img  height={400}width={150} src={`../asl/Sign_language_${this.state.c2}.svg`}></img>
            </div>


           <div onClick={()=>this._checkAnswer(this.state.c3,this.state.alpha)} style={{float:'left',backgroundColor:'#FFF', marginTop:'5%', marginLeft:'5%', width:'20%',paddingTop:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
            <img height={400} width={150} src={`../asl/Sign_language_${this.state.c3}.svg`}></img>
          </div>

          <br></br>
         
          
          </div>  }
            { !this.state.incorrect && this.state.correct &&
             <div style={{paddingTop:'15%'}}>
    <div style={{backgroundColor:'#FFF', marginTop:'1.4%', marginLeft:'40%', alignSelf:'center', width:'20%',paddingTop:'5%',paddingBottom:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
          
         <div style={{fontFamily:'Work Sans', fontSize:20, color:'#274968', fontWeight:600}}> Correct Answer!</div>
         <div style={{fontFamily:'Work Sans', fontSize:30, color:'#274968', fontWeight:800}}> +100 points</div>
          <div style={{fontFamily:'Work Sans', fontSize:20, fontWeight:500, backgroundColor:'#274968', color:'#FFF', width:'70%', borderRadius:10, height:'5%', paddingTop:'2%',paddingBottom:'2%', marginTop:'5%', marginLeft:'12.5%', marginBottom:'15%',paddingBottom:'2%'}} onClick={()=>this.getAlphabet(this.state.incorrect)}>Next question</div>
          </div>
    </div>
    }
    { this.state.incorrect && !this.state.correct && 
     <div style={{paddingTop:'15%'}}>
   <div style={{backgroundColor:'#FFF', marginTop:'1.4%', marginLeft:'40%', alignSelf:'center', width:'20%',paddingTop:'5%',paddingBottom:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
          
   <div style={{fontFamily:'Work Sans', fontSize:20, color:'#274968', fontWeight:600}}> Incorrect!</div>
    <div style={{fontFamily:'Work Sans', fontSize:20, fontWeight:500, backgroundColor:'#274968', color:'#FFF', width:'70%', borderRadius:10, height:'5%', paddingTop:'2%',paddingBottom:'2%', marginTop:'5%', marginLeft:'12.5%', marginBottom:'15%',paddingBottom:'2%'}} onClick={()=>this.getAlphabet(this.state.incorrect)}>Try again</div>
    </div>
</div>
    }
            
         
     
          </div>

  
  
  
  
           </div>   
          );
      }
  }
  
  export default Level1;