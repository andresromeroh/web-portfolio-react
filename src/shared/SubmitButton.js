import React from 'react';
import { Button } from 'react-bootstrap';

export default function SubmitButton({ text, size, className = '' }) {
    return (
        <React.Fragment>
            <Button type='submit' className='btn-primary' size={size} block>
                {text}
            </Button>
        </React.Fragment>
    )
}
