/**
 * Created by Sravani on 2/12/2017.
 */

import React from "react";
import axios from "axios";
import {browserHistory} from "react-router";

import {isLoggedIn} from "./constants/isLoggedIn";


export class SigninPage extends React.Component {


    constructor() {
        super();
        this.state = {
            emailId: "",
            password: ""
        };
    }


    componentWillMount() {
        if (isLoggedIn()) {

            browserHistory.push("/home");
        } else {
            browserHistory.push("/");
        }

    }

    onClickSubmit(e) {
        e.preventDefault();
        var signInData = {
            emailId: this.state.emailId,
            password: this.state.password
        };
        console.log("email id", signInData.emailId);
        console.log("password", signInData.password);

        axios.post('/signin', signInData)
            .then((res)=> {
                console.log("Login response", res);
                this.onClickSubmitCallBack(res.data);
            })
            .catch((err)=> {
                console.log("server error ", err);
            });

    }


    onClickSubmitCallBack(result) {

        if (result.error) {
            console.log("user name and password doesn't exist");
        } else {
            console.log("token and pname", result.datares.token, result.datares.pname);
            location.reload();
            browserHistory.push("/home");
            localStorage.setItem("token", result.datares.token);
            localStorage.setItem("partnerName", result.datares.partnerName);


        }

    }

    render() {

        return (
            <div>
                <br/><br/>
                <div className="col-xs-10 form-group loginform ">
                    <br/> <br/>  <h3><b>Login to Your Account</b></h3><br/>
                    <form onSubmit={this.onClickSubmit.bind(this)}>
                        <input className="form-control" type="text" id="user" placeholder="Username"
                               value={this.state.emailId} onChange={(e) => {
                            this.setState({emailId: e.target.value})
                        }}/><br/>
                        <input className="form-control" type="password" id="pass" placeholder="Password"
                               value={this.state.password} onChange={(e) => {
                            this.setState({password: e.target.value})
                        }}/><br/><br/>
                        <button type="submit" className="btn btn-primary btn-block" name="login" value="Login">Login
                        </button>
                    </form>
                    <br/>
                    {/*<div className="login-help">*/}
                    {/*<a href="#">Register</a> - <a href="#">Forgot Password</a>*/}
                    {/*</div>*/}
                </div>
            </div>
        );

    }


}
