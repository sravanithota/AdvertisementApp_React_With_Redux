/**
 * Created by Sravani on 3/1/2017.
 */
/**
 * Created by Sravani on 2/26/2017.
 */
import {PARTNERS} from "../constants/actionTypes";

const INITIAL_STATE = {partnersDtls: []};

export default function (state = INITIAL_STATE, action) {
    console.log("action in partners reducer",action);
    switch (action.type) {
        case PARTNERS:
            return {...state, partnersDtls : action.payload};

        default:
            return state;
    }
}