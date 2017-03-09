/**
 * Created by Sravani on 3/1/2017.
 */

import {CREATE_AD} from "../constants/actionTypes";

const INITIAL_STATE = {createAd: []};

export default function (state = INITIAL_STATE, action) {
    console.log("action in Create Advertisement reducer",action);
    switch (action.type) {
        case CREATE_AD:
            return {...state, createAd : action.payload};

        default:
            return state;
    }
}