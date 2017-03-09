/**
 * Created by Sravani on 2/23/2017.
 */
import React from 'react';
import axios from 'axios';
import {NavItem, Navbar, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import {Link,browserHistory} from  'react-router';
import {isLoggedIn} from './constants/isLoggedIn'
export class Header extends React.Component {

    constructor(){
        super();
        this.state= {
            signInLink: "show",
            signOutLink:"hide",
            sampleLink:"hide"
        }


    }
    componentWillMount() {
        if (isLoggedIn()) {
            this.setState({
                signInLink: "hide",
            signOutLink:"show",
            sampleLink:"show"
        });
        }
        else {
            this.setState({
            signInLink:"show",
            signOutLink:"hide",
            sampleLink:"hide"
        });
        }
    }
    signout(e) {
        var token = localStorage.getItem("token");
        console.log("tokennnnnnnnnnn"+ token);
        var config = {
            headers: {'Content-Type': 'application/json', 'token': token}
        };

        axios.post("/signout", config)
            .then((res) => {
                console.log(res);
                this.signoutCallBack(res.data);
            })
            .catch((err) => {
                    console.log("server error");
                }
            )

    }

    signoutCallBack(result) {
        if (result.error) {
            localStorage.removeItem("token");
            localStorage.removeItem("partnerName");
            console.log("error in result body");
        } else {

            localStorage.removeItem("token");
            localStorage.removeItem("partnerName");
            location.reload();
            browserHistory.push('/');
            console.log("successfully signedout");

        }

    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand">React project</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav navbar-right">
                                <li className={this.state.sampleLink}><Link to={"/home"}>Home</Link></li>
                                <li className={this.state.signInLink}><Link to={"/signin"}>SiginIn</Link></li>
                                <li className={this.state.sampleLink}><Link to={"/create"}>Create Ad</Link></li>
                                <li className={this.state.sampleLink}><Link to={"/partners"}>partners</Link></li>
                                <li className={this.state.signOutLink}><Link to="/" onClick={this.signout.bind(this)}>SignOut</Link></li>

                            </ul>

                        </div>

                </nav>
            </div>
        );
    }

}