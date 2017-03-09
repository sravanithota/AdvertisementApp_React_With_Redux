import {combineReducers} from 'redux';
import AdServerReducer from './AdServerReducer';
import CreateAdvertisementReducer from './CreateAdvertisementReducer';
import PartnersReducers from './PartnersReducers';
import ActiveAdvertisementReducer from './ActiveAdvertisementReducer';



const rootReducer = combineReducers({
    AdServer: AdServerReducer,
    SaveAdvertisement: CreateAdvertisementReducer,
    partners: PartnersReducers,
    ActiveAdvertisement:ActiveAdvertisementReducer

});


export default rootReducer;
