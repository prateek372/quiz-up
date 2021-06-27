import React, { Component, useState} from "react";
// import "./Login/Login"

export default class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            userEmail: "",
            userPass: ""
        }
    }
    
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                    onChange = {(e) => {
                        this.state.userEmail = e.target.value
                        console.log(this.state.userEmail)
                    }
                }
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                    onChange = {(e) => {
                        this.state.userPass = e.target.value
                        console.log(this.state.userPass)
                    }
                 } />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}