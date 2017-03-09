/**
 * Created by Sravani on 2/26/2017.
 */
import React, {PropTypes, Component} from "react";
import {humane} from "humane-js";
import {isLoggedIn} from "../constants/isLoggedIn";
import {browserHistory} from "react-router";
import {Carousel} from "react-bootstrap";
import {S3_CAROUSEL_1,S3_CAROUSEL_2,S3_CAROUSEL_3} from "../constants/Urls";

import fb from "../styles/fb.png";
import {S3_TWITTER,S3_FB,S3_SKYPE,S3_YOUTUBE} from "../constants/Urls";




export class AdServerComponent extends React.Component {

    constructor(props) {
        super(props);
        console.log("properties", props);

    }

    componentWillMount() {

        if (isLoggedIn()) {

            browserHistory.push("/home");
        } else {
            browserHistory.push("/");
        }

    }

    render() {
        return (

            <div>
                <div>
                    <Carousel>
                        <Carousel.Item>

                            <img width={1400} height={400} alt="900x500" src={S3_CAROUSEL_1}/>
                            <Carousel.Caption>
                                <h3>Explore The Creative Ideas</h3>
                                <p></p>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1400} height={400} alt="900x500" src={S3_CAROUSEL_2}/>
                            <Carousel.Caption>
                                <h3>Design Advertisement</h3>
                                <p>Making Advertisement is your choice</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1400} height={400} alt="900x500" src={S3_CAROUSEL_3}/>
                            <Carousel.Caption>
                                <h3>Success Step</h3>
                                <p>Meet Your product to the World and success is in your hands</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="bg1">
                    <br/><br/><br/>
                    <p><b>About Us</b></p>
                   <br/>
                   <p className="adtext"> In the world of business, it is no secret that the spirit of competition is a vital principle.
                       When it comes to recruitment, you will want to attract the best and the brightest people to serve as the foundations and grassroots of your company.
                       Your people will be your company’s greatest resource.</p>
                    <br/><br/><br/>
                </div>


                <div className="bg2">
                    <br/><br/>
                    <p><b>Connect</b></p>
<br/>
                  <span className="social">  <img width={50} height={50} alt="900x500" src={S3_TWITTER}/></span>
                    <span className="social"><img width={50} height={50} alt="900x500" src={S3_FB}/></span>
                    <span className="social"> <img width={55} height={50} alt="900x500" src={S3_SKYPE}/></span>
                    <span className="social"><img width={50} height={50} alt="900x500" src={S3_YOUTUBE}/></span>
                    <br/><br/><br/><br/>

                </div>

            </div>

        );
    }
}
