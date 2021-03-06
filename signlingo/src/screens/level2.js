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

class Level2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        alpha: null,
        correct: false,
        incorrect: false,
        c1: null,
        value: null,
      };
      this.handleChange = this.handleChange.bind(this);
    } 
    getAlphabet(a) {
        if(a==false){
           var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTWXYZ";    
      text = possible.charAt(Math.floor(Math.random() * possible.length));
      this.setState({alpha:text})
      console.log(text)
      this.setState({value:null})
      this.setState({correct:false})
        }
        else{
          this.setState({incorrect:false})
          this.setState({correct:false})
          this.setState({value:null})
        }
    
     
    }
   
    _checkAnswer(x,y){
        this.setState({value:null})
        console.log(x,y)
        if(x==y){
            this.setState({correct:true});
            if (window.sessionStorage.getItem("level2") == null){
              window.sessionStorage.setItem("level2", 100);
            }
            else{
              window.sessionStorage.setItem("level2", parseInt(window.sessionStorage.getItem("level2")) + 100);
            }

        }
        else{
            this.setState({incorrect:true});
        }

    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
    componentDidMount(){
        this.getAlphabet(false)
      
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
          
          
          <div style={{backgroundColor:'#FFFFFF', marginTop:'-1%', display:'block', height:'88vh'}}>
          {!this.state.incorrect && !this.state.correct && <div>
            <div style={{fontFamily:'Helvetica', fontSize:35, fontWeight:'450', color:'#717171', paddingTop:'3%'}}>Which letter does this represent?</div> <br></br>
           
           
            <div style={{backgroundColor:'#FFF', marginLeft:'40%', alignSelf:'center', width:'20%', borderRadius:20}}>
          
            <img  style={{textAlign:'center', alignSelf:'center'}}  height={280} width={120} src={`../asl/Sign_language_${this.state.alpha}.svg`}></img>
       
            </div>


            <input style={{width:'30%', fontSize:22, borderRadius:10, borderWidth :0, backgroundColor:'#E7E7E7', padding:'25px'}} name="answer" value={this.state.value} onChange={this.handleChange} placeholder="Type your answer"></input>
            <div style={{backgroundColor:'#274968', color:'#FFF', width:300, fontFamily:'Helvetica', fontSize:20, borderRadius:10, padding:'1%', marginBottom:'2.5%', textAlign:'center', alignSelf:'center', justifyContent:'center', justifySelf:'center', marginTop:'1%', marginLeft:'39%'}} onClick={()=>this._checkAnswer(this.state.value,this.state.alpha)}>
                SUBMIT
                </div> <br></br>
         </div>}
                { !this.state.incorrect && this.state.correct &&
                 <div style={{paddingTop:'15%'}}>
    <div style={{backgroundColor:'#FFF', marginTop:'1.4%', marginLeft:'40%', alignSelf:'center', width:'20%',paddingTop:'5%',paddingBottom:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
          
         <div style={{fontFamily:'Helvetica', fontSize:20, color:'#274968', fontWeight:600}}> Correct Answer!</div>
         <div style={{fontFamily:'Helvetica', fontSize:30, color:'#274968', fontWeight:800}}> +100 points</div>
          <div style={{fontFamily:'Helvetica', fontSize:20, fontWeight:500, backgroundColor:'#274968', color:'#FFF', width:'70%', borderRadius:10, height:'5%', paddingTop:'2%',paddingBottom:'2%', marginTop:'5%', marginLeft:'12.5%', marginBottom:'15%',paddingBottom:'2%'}} onClick={()=>this.getAlphabet(this.state.incorrect)}>Next question</div>
       </div>   
    </div>
    }
    { this.state.incorrect && !this.state.correct && 
    <div style={{paddingTop:'15%'}}>
   <div style={{backgroundColor:'#FFF', marginTop:'1.4%', marginLeft:'40%', alignSelf:'center', width:'20%',paddingTop:'5%',paddingBottom:'2.5%', borderRadius:20, boxShadow:'-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)-webkit-box-shadow: 5px 5px 8px -1px rgba(0,0,0,0.67)',boxShadow: '5px 5px 8px -1px rgba(0,0,0,0.67)'}}>
          
   <div style={{fontFamily:'Helvetica', fontSize:20, color:'#274968', fontWeight:600}}> Incorrect!</div>
    <div style={{fontFamily:'Helvetica', fontSize:20, fontWeight:500, backgroundColor:'#274968', color:'#FFF', width:'70%', borderRadius:10, height:'5%', paddingTop:'2%',paddingBottom:'2%', marginTop:'5%', marginLeft:'12.5%', marginBottom:'15%',paddingBottom:'2%'}} onClick={()=>this.getAlphabet(this.state.incorrect)}>Try again</div>
    </div>
</div>
    }



          </div>
         
  
  
  
  
           </div>   
          );
      }
  }
  
  export default Level2;