import React, { Component } from 'react';
import { Spinnercss } from './CustomStyled';
import RingLoader from 'react-spinners/RingLoader';

export default class AppSpinner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="application-spinner">
                    <RingLoader css={Spinnercss} size={80} loading={true} color='#ef233c' />
                </div>
            </React.Fragment>
        )
    }
}
