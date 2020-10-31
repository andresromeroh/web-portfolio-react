import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Action could be either a URL or a function depending if the button is a link
export default function StandardButton({ text, size, isLink, action }) {
    if (isLink) {
        return (
            <React.Fragment>
                <Link className='nav-link' to={action}>
                    <Button
                        className="standard-btn"
                        size={size}
                        variant="outline-primary"
                    >
                        {text}
                    </Button>
                </Link>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <Button
                    className="standard-btn"
                    onClick={action}
                    size={size}
                    variant="outline-primary"
                >
                    {text}
                </Button>
            </React.Fragment>
        )
    }
}
