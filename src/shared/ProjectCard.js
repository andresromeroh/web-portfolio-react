import React from 'react';

export default function ProjectCard({ title, description, language, url }) {
    return (
        <div className="project-card-no-image">
            <h4><a href={url}>{title}</a></h4>
            <h5>{description}</h5>
            <div className="tags">
                {language}
            </div>
        </div>
    )
}
