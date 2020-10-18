import React from 'react';
import { Card } from 'react-bootstrap';

export default function SkillCard({ icon, header, text }) {
    return (
        <Card className="special-skill-item border-0">
            <div className="card-header bg-transparent border-0">
                <i className={`icon ${icon}`}></i>
            </div>
            <div className="card-body">
                <h3 className="card-title">{header}</h3>
                <p className="card-text">{text}</p>
            </div>
        </Card>
    )
}
