import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div className="page cv-page my-1">
                <div className="portfolio-block cv align-content-center">
                    <div className="container">
                        <div className="work-experience group">
                            <div className="heading py-5">
                                <h2 className="text-center">Work Experience</h2>
                            </div>
                            <div className="item py-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Software Developer</h3>
                                        <h4 className="organization">First Factory</h4>
                                    </div>
                                    <div className="ml-auto mr-5 pr-5"><small><span className="period">02/2020 - Present</span></small></div>
                                </div>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
                            </div>
                            <div className="item py-3">
                                <div className="row">
                                    <div className="col-6">
                                        <h3>Jr. Application Developer</h3>
                                        <h4 className="organization">IBM</h4>
                                    </div>
                                    <div className="ml-auto mr-5 pr-5"><small><span className="period">08/2019 - 02/2020</span></small></div>
                                </div>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
                            </div>
                        </div>
                        <div className="education group">
                            <div className="heading py-5">
                                <h2 className="text-center">Professional Education</h2>
                            </div>
                            <div className="item py-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Bachelor's Degree in Software Engineering</h3>
                                        <h4 className="organization">Universidad Nacional de Costa Rica</h4>
                                    </div>
                                    <div className="ml-auto mr-5 pr-5"><small><span className="period">06/2019 - 06/2020</span></small></div>
                                </div>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
                            </div>
                            <div className="item py-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3>Associate's Degree in Software Engineering</h3>
                                        <h4 className="organization">Universidad Nacional de Costa Rica<br />
                                        </h4>
                                    </div>
                                    <div className="ml-auto mr-5 pr-5"><small><span className="period">06/2015 - 06/2019</span></small></div>
                                </div>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit ultricies, feugiat est sed, efficitur nunc, vivamus vel accumsan dui.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fab">
                    <a href='https://www.dropbox.com/s/bfe85epvqi99a8j/ANDRES_ROMERO_CV.pdf?dl=0' target='_blank' rel='noreferrer' style={{ color: 'inherit', textDecoration: 'none' }}>
                        <i className={`icon ion-document-text`} />
                    </a>
                </div>
            </div >
        )
    }
}
