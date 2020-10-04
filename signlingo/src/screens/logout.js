import React, {Component} from "react";
import {Link} from 'react-router-dom';


class Logout extends Component {
	 constructor(props) {
      super(props);
      }
	render(){
		window.sessionStorage.removeItem("userid");
		this.props.history.push("/login");
		return null;
	}
}

export default Logout;