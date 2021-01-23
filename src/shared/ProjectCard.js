import React from 'react';

export default function ProjectCard({ title, description, language, url }) {
    return (
        <div className="project-card-no-image">
            <h6>{title}</h6>
            <p>{description}</p>
            <div>
                <small>
                    Language: {language}
                </small>
            </div>
            <div>
                <small>
                    <strong>
                        <a href={url} style={{ textDecoration: 'none', color: '#2b2d42' }}>
                            {' '}Project Details
                        </a>
                    </strong>
                </small>
            </div>
        </div>
    )
}
