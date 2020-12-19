import React from 'react';
import { Button } from 'react-bootstrap';

// Primary Button for Key Actions
export default function PrimaryButton({ text, size, action, className = '' }) {
    return (
        <React.Fragment>
            <Button
                className={className ? `btn-primary ${className}` : 'btn-primary'}
                onClick={action}
                size={size}
                block
            >
                {text}
            </Button>
        </React.Fragment>
    )
}
