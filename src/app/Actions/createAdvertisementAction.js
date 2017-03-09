/**
 * Created by Sravani on 3/1/2017.
 */


import axios from "axios";
import React from "react";
import {CREATE_AD} from "../constants/actionTypes";
import * as URL from "../constants/Urls";

function receiveAdCreateRes(data) {
    return {
        type: CREATE_AD,
        payload: data
    }
}
export function createAdvertisement(data) {
    return function (dispatch) {
        axios.post(URL.AD_CREATE,data)
            .then(res=> {
                    dispatch(receiveAdCreateRes(res.data.datares));
                }
            ).catch((err)=> {
                console.log("create adverisement Action:")
            }
        )
    }
}

