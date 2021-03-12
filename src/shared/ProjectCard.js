import React from 'react';

export default function ProjectCard({ title, description, language, url }) {
    return (
        <div className='project-card-no-image'>
            <h6><strong>{title}</strong></h6>
            <div>
                <small>
                    Coding Language: {language}
                </small>
            </div>
            <div>
                <small>
                    <strong>
                        <a target='_blank' rel='noreferrer' href={url} style={{ textDecoration: 'none', color: '#2b2d42' }}>
                            {' '}See in GitHub
                        </a>
                    </strong>
                </small>
            </div>
        </div>
    )
}
