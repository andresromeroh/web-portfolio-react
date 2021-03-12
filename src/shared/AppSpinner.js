import React, { Component } from 'react';
import { Spinnercss } from './CustomStyled';
import PacmanLoader from 'react-spinners/PacmanLoader';

export default class AppSpinner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="application-spinner">
                    <PacmanLoader css={Spinnercss} size={30} loading={true} color='#ef233c' />
                </div>
            </React.Fragment>
        )
    }
}
