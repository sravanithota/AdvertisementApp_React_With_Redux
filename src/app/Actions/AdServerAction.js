/**
 * Created by Sravani on 2/26/2017.
 */

import axios from 'axios';
import React from "react";

import {AD_SERVER_DTLS} from "../constants/actionTypes";
import * as URL from "../constants/Urls";




function receiveAdServerDtls(data) {

    return {
        type: "AD_SERVER_DTLS",
        payload: data
    };
}

export function fetchAdServerDtls() {
    return function(dispatch) {
        axios.get(URL.ADSERVER_FETCH)
            .then(res => {
                console.log("response from serverrrrrrrrrrr",res);
                dispatch(receiveAdServerDtls(res.data.datares));
            })
            .catch((err) => {//error
                console.log("fetchAdServer Action :  ", err);
            });
    }


}


