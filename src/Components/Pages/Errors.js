import React, { Component } from "react";
import { Link } from "react-router-dom";

class Error extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div>
           <h1>404 - Page Not Found</h1>
           <Link to="/app/home" ><div className="button_slide slide_left mt-1"  style={
                JSON.parse(localStorage.getItem("settheme"))
                  ? this.props.isAccent
                  : this.props.isNotAccent
              }>Back Home</div></Link>
        </div>
        )
    }
}
export default Error;