import React, { Component } from 'react';
import { Spinnercss } from './CustomStyled';
import ClipLoader from 'react-spinners/ClipLoader';

export default class AppSpinner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="application-spinner">
                    <ClipLoader css={Spinnercss} size={30} loading={true} color='#ef233c' />
                </div>
            </React.Fragment>
        )
    }
}
