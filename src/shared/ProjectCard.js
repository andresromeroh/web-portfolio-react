import React from 'react';

export default function ProjectCard({ title, description, language, url }) {
    return (
        <div className="project-card-no-image">
            <h4>{title}</h4>
            <h6>{description}</h6>
            <div className="tags">
                {/* TODO: Convert to Styled Component */}
                <small>
                    Language: {language} |
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
