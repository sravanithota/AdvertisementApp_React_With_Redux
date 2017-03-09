/**
 * Created by Sravani on 3/1/2017.
 */
import axios from 'axios';
import React from "react";

import {ACTIVE_AD} from "../constants/actionTypes";
import * as URL from "../constants/Urls";


function receiveActiveAd(data) {

    return {
        type: "ACTIVE_AD",
        payload: data
    };
}

export function fetchActiveAd(id) {
    return function (dispatch) {
        axios.get(`${URL.ACTIVE_AD_FETCH}/${id}`)
            .then(res => {
                console.log("response for receiveActiveAd ", res);
                dispatch(receiveActiveAd(res.data.datares));
            })
            .catch((err) => {//error
                console.log("error in receiveActiveAd Action :  ", err);

            });
    }


}