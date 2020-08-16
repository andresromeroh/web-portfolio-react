import React, { Component } from 'react'

export default class SkillSet extends Component {
    render() {
        return (
            <section className="skill-set">
                <div className="container">
                    <div className="heading" style={{ paddingBottom: "30px" }}>
                        <h2>Software Development Skills</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card special-skill-item border-0">
                                <div className="card-header bg-transparent border-0"><i className="icon ion-android-settings"></i></div>
                                <div className="card-body">
                                    <h3 className="card-title">Backend Development</h3>
                                    <p className="card-text">I love backend development, I have experience using NodeJS and Java to implement RESTful services, business logic, security and middleware layers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card special-skill-item border-0">
                                <div className="card-header bg-transparent border-0"><i className="icon ion-code"></i></div>
                                <div className="card-body">
                                    <h3 className="card-title">Frontend Development</h3>
                                    <p className="card-text">Either you need someone able to work with the latest frontend libraries like React and Redux, or someone to work with plain Javascript, HTML &amp; CSS I got you covered.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card special-skill-item border-0">
                                <div className="card-header bg-transparent border-0"><i className="icon ion-android-cloud-outline"></i></div>
                                <div className="card-body">
                                    <h3 className="card-title">Cloud Services</h3>
                                    <p className="card-text">Want to implement cloud native applications? I've worked with some of the most popular cloud services to build and deploy code and databases including IBM Cloud, Heroku, AWS and Mongo DB.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
