/**
 * Created by Sravani on 1/31/2017.
 */
import React from "react";

export class MySelf extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("properties",props);
        this.state=
        {
            x:10,
            y:20

        }
    }
    render()
    {
        return(
            <div>
                <h1>hello props - {this.props.mydata+this.props.myvalue}</h1>
                <h1>Myself sravani, I pray to god everyday and I love nature {this.state.x+this.state.y}</h1>
            </div>
        );
    }
}
