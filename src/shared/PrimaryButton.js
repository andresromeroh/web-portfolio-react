import React from 'react';
import { Button } from 'react-bootstrap';

export default function PrimaryButton({ text, size, action, disabled, className = '' }) {
    return (
        <React.Fragment>
            <Button
                className={className ? `btn-primary ${className}` : 'btn-primary'}
                onClick={action}
                size={size}
                disabled={disabled}
                block
            >
                {text}
            </Button>
        </React.Fragment>
    )
}
