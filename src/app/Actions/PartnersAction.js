/**
 * Created by Sravani on 3/1/2017.
 */


import axios from 'axios';
import React from "react";

import {PARTNERS} from "../constants/actionTypes";
import * as URL from "../constants/Urls";


function receivePartners(data) {

    return {
        type: "PARTNERS",
        payload: data
    };
}

export function fetchPartners() {
    return function(dispatch) {
        axios.get(URL.PARTNERS_FETCH)
            .then(res => {
                console.log("response for fetchPartners ",res);
                dispatch(receivePartners(res.data.datares));
            })
            .catch((err) => {//error
                console.log("error in fetchPartners Action :  ", err);
            });
    }


}