import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.png';
import Slide from '../assets/slide.png';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Email: '',
        Password: '',
        Error:'',
      }
      this.Email = this.Email.bind(this);
      this.Password = this.Password.bind(this);
      this.login = this.login.bind(this);
    }

  Email(event) {
    this.setState({ Email: event.target.value })
  }
  Password(event) {
    this.setState({ Password: event.target.value })
  }
  
  login(event) {
    console.log(this.state);
    if (this.state.Email != "" && this.state.Password != ""){
    fetch('https://us-central1-snappy-frame-287205.cloudfunctions.net/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
        password: this.state.Password,
        email: this.state.Email,
      })
    }).then((Response) => Response.json())
      .then((Result) => {
        
        if (Result.status == 'success'){
          window.sessionStorage.setItem("userid", Result.userid);
          this.props.history.push("/home");}
        else
          this.setState({Error:'Incorrect email or password.'});
      })
    }
    else{
      this.setState({Error:'Please enter valid credentials.'});
    }

  }

      render() {
          if (window.sessionStorage.getItem("userid") != null){
            this.props.history.push("/home");
            return null;
          }
          return (
           <div style={{margin:'auto', alignSelf:'center', alignContent:'center', justifyContent:'center'}}>
           <div style={{float:'right', width:'60%',alignSelf:'center', verticalAlign:'middle', paddingTop:'10%', backgroundColor:'#F7F9FB', height:'80vh'}}>
            <img src={Slide} height="300vh"  style={{ margin:'1.5%', alignSelf:'center'}}></img>
          <br></br>
    
            <div style={{fontFamily:'Helvetica', fontSize:30, fontWeight:'600', color:'#2D3748', marginTop:'4%'}}>Learn Sign Langauge interactively.</div>
     
          </div>
            <div style={{float:'left', width:'40%'}}>
            <div style={{fontFamily:'Helvetica', fontSize:45, fontWeight:'550', color:'#2D3748', marginTop:'30%', marginBottom:"3%"}}>Sign In</div>
            <input  onChange={this.Email} type="text" placeholder="Email" style={{width:'50%', fontSize:16, borderRadius:10, borderWidth :0, backgroundColor:'#E7E7E7', marginTop:'5%' , padding:'3%'}} />
            <input  onChange={this.Password} type="password" placeholder="Password" style={{width:'50%', fontSize:16, borderRadius:10, borderWidth :0, backgroundColor:'#E7E7E7', marginTop:'5%' , padding:'3%'}} />
            <p style={{fontFamily:'Helvetica', fontSize:16, color:'#FF0000'}}>{this.state.Error}</p>
            <div onClick = {this.login} style={{borderRadius:10,backgroundColor:'#274968', color:'#FFF', width:'40%', fontFamily:'Helvetica' , fontSize: '12pt', textAlign:'center', fontWeight:'600', padding:'2.5%', alignSelf:'center', justifyContent:'center', marginLeft:'27%', marginTop:'5%', marginBottom:"10%"}}>LOGIN</div>
            <p style={{fontFamily:'Helvetica', fontSize:18, color:'#2D3748'}}>{"Don't have an account? "}<Link to = "/register"  style = {{textDecoration: 'none'}}>Sign up</Link></p>
            </div>
           </div>   
          );
      }
  }
  
  export default Login;