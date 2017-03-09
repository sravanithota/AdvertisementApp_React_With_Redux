/**
 * Created by Sravani on 3/1/2017.
 */

import React,{PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchPartners} from "../Actions/PartnersAction";
import {Link} from 'react-router';

export class PartnersContainer extends React.Component {

    constructor(props) {
        super(props);
    }
    componentWillMount()
    {
        this.props.fetchPartners();
    }

    getPartners()
    {
        return this.props.partners || [];
    }

    renderPartnerDtls() {
        return this.getPartners().map((partner, i) => {
            return (
                <ul className="list-group partnersList" key={i}>
                    <li className="list-group-item">
                        <Link to={`/partners/${partner.partnerId}`}>{partner.pname}</Link>
                    </li>
                </ul>
            );
        }, this);
    }

    render() {
        return (
            <div>

                <h3>{this.renderPartnerDtls()}</h3>

            </div>
        );
    }
}
PartnersContainer.propTypes = {

    partners: PropTypes.array

};

const mapStateToProps = (state) => {

    return {partners: state.partners.partnersDtls}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPartners}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PartnersContainer)

