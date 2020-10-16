import React from 'react';
import { Button } from 'react-bootstrap';

export default function StandardButton({ text, size }) {
    return (
        <React.Fragment>
            <Button
                className="standard-btn"
                variant="outline-primary"
                size={size}
            >
                {text}
            </Button>
        </React.Fragment>
    )
}
