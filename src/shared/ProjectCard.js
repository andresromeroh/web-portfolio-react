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
                        <a href={url} style={{ textDecoration: 'none', color: '#f45b69' }}>
                            {' '}See more
                        </a>
                    </strong>
                </small>
            </div>
        </div>
    )
}
