/**
 * Created by Sravani on 2/26/2017.
 */
import {AD_SERVER_DTLS} from "../constants/actionTypes";

const INITIAL_STATE = {adServerDtls: []};

export default function (state = INITIAL_STATE, action) {
    console.log("action in adserverreducer",action);
    switch (action.type) {
        case AD_SERVER_DTLS:
                return {...state, adServerDtls : action.payload};

        default:
            return state;
    }
}
