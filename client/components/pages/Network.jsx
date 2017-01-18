import React from "react";

export default class Network extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const projects = this.props.projects;

        return (
            <section className="network">
                <h2>Network</h2>
                
                <div className="projects">{
                    Object.keys(projects).map(p => {
                        return (
                            <div className="project">
                                <h3 className="name">
                                    <a href={projects[p].link} target="_blank">{
                                        projects[p].name
                                    }</a>
                                </h3>
                                <span className="description">{
                                    projects[p].description
                                }</span>
                            </div>
                        );
                    })
                }</div>
            </section>
        );
    }

}