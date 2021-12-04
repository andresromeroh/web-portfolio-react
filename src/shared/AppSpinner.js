import React, { Component } from 'react';
import { Spinnercss } from './CustomStyled';
import PuffLoader from 'react-spinners/PuffLoader';

export default class AppSpinner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="application-spinner">
                    <PuffLoader css={Spinnercss} size={100} loading={true} color='#ef233c' />
                </div>
            </React.Fragment>
        )
    }
}
