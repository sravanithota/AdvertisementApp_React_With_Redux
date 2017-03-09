/**
 * Created by Sravani on 3/1/2017.
 */
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {createAdvertisement} from "../Actions/createAdvertisementAction";

export class CreateAdvertisementContainer extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);

        this.state = {

            partnerId: "",
            duration: "",
            adContent: ""
        };


    }

    onClickSubmit(e) {
        e.preventDefault();
        var data = {
            partnerId: this.state.partnerId,
            duration: this.state.duration,
            adContent: this.state.adContent
        };
        this.props.createAdvertisement(data);
        this.setState({partnerId: "", duration: "", adContent: ""});


    }

    render() {
        return (
            <div>
                <div className="createAdForm container-fluid" >
                <div className="col-xs-10 col-xs-offset-1 form-group ">
                    <br/> <br/>  <h3><b>Create Advertisement</b></h3><br/>
                    <form onSubmit={this.onClickSubmit.bind(this)}>
                        <input className="form-control" type="text" id="pid" placeholder="Partner Id"
                               value={this.state.partnerId} onChange={(e) => {
                            this.setState({partnerId: e.target.value})
                        }}/><br/>
                        <input className="form-control" type="text" id="dur" placeholder="duration"
                               value={this.state.duration} onChange={(e) => {
                            this.setState({duration: e.target.value})
                        }}/><br/>
                        <textarea className="form-control" id="ad" placeholder="Ad Content"
                               value={this.state.adContent} onChange={(e) => {
                            this.setState({adContent: e.target.value})
                        }}/><br/>


                        <br/>
                        <button type="submit" className="btn btn-primary btn-block" name="save" value="Save">Save
                        </button>
                    </form>
                    <br/>
                </div>
                    </div>
            </div>

        );

    }


}

// CreateAdvertisementContainer.propTypes={
//
// createAd:
// };
const mapStateToProps = (state) => {

    return {createAd: state.SaveAdvertisement.createAd}
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createAdvertisement}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdvertisementContainer)
