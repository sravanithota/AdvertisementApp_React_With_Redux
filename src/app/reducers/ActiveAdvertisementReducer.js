/**
 * Created by Sravani on 3/1/2017.
 */
import {ACTIVE_AD} from "../constants/actionTypes";

const INITIAL_STATE = {activeAd: []};

export default function (state = INITIAL_STATE, action) {
    console.log("action in Create Advertisement reducer",action);
    switch (action.type) {
        case ACTIVE_AD:
            return {...state, activeAd : action.payload};
        default:
            return state;
    }
}

