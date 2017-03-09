/**
 * Created by Sravani on 2/21/2017.
 */
import React from 'react';
import {Header} from './Header';
import {Link} from 'react-router';
import {Footer} from "./Footer";

export class Root extends React.Component
{
    render()
    {
        return(

            <div>

                    <Header/>
                    <div>
                            {this.props.children}
                    </div>
            </div>
        );
    }
}
