import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function StandardButton({ text, size, action, className = '' }) {
    return (
        <React.Fragment>
            <Link className='nav-link' to={action}>
                <Button
                    className={className ? `standard-btn ${className}` : 'standard-btn'}
                    size={size}
                    variant='primary'
                    block
                >
                    {text}
                </Button>
            </Link>
        </React.Fragment>
    )
}
