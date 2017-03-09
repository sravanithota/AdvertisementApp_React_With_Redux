/**
 * Created by Sravani on 2/13/2017.
 */
import {browserHistory} from "react-router";
export const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
        return true;
    }
    else {
        return false;

    }



};
