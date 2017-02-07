/**
 * Created by Sravani on 1/31/2017.
 */
import React from "react";
import ReactDOM from "react-dom";
import {MySelf} from "./MySelf";

export class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            myData:"hello"
        }

    }
    onClickHandler()
    {
         this.setState({myData:"i am changed"});
    }

    updateChange(e)
    {
        this.setState({myData:e.target.value});
    }
    clearInput()
    {
        this.setState({myData:''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
    }

    render()
    {

        return(
          <div>

              <h1>Helooooooooooooooooooooooooo {this.state.myData}</h1>
              <MySelf mydata={this.state.myData} myvalue="90" />
              <input id="inputs" value={this.state.myData} onChange={this.updateChange.bind(this)} ref="myInput"></input>
              <button onClick={this.onClickHandler.bind(this)}>press me</button>
              <button onClick={this.clearInput.bind(this)}>clear</button>
          </div>
        );
    }

}


