/**
 * Created by Sravani on 3/1/2017.
 */

import React,{PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router"
import {fetchActiveAd} from "../Actions/ActiveAdvertisementAction";
export class ActiveAdvertisementContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log("properties", props);


    }

    componentWillMount() {
        const {id} = this.props;
        this.props.dispatch(fetchActiveAd(id));
    }

    getActivePartners()
    {
        console.log("getActivePartners in container",this.props.activeAds);
        return this.props.activeAds || [];


    }

    renderActivePartners() {

        return this.getActivePartners().map((activeAd, i) => {
            return (
                <ul className="list-group" key={i}>
                    <li className="list-group-item">

                        <p>{activeAd.adContent}</p>

                    </li>
                </ul>
            );
        }, this);
    }


    render() {
        return (

            <div>

                {this.renderActivePartners()}

            </div>
        );
    }
}
ActiveAdvertisementContainer.propTypes = {

    id: PropTypes.string,
    activeAds:PropTypes.array

};

const mapStateToProps = (state,ownProps) =>( {

    activeAds: state.ActiveAdvertisement.activeAd,
        id : ownProps.params.id
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchActiveAd}, dispatch)
}

export default withRouter(connect(
    mapStateToProps
)(ActiveAdvertisementContainer));


