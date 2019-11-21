import React, { Component } from 'react';
import Heading from "react-bulma-components/lib/components/heading";

import AboutSection from "components/AboutSection/AboutSection";
import EducationSection from 'components/EducationSection/EducationSection';
import EmploymentSection from 'components/EmploymentSection/EmploymentSection';
import PortfolioSection from 'components/PortfolioSection/PortfolioSection';


import API from "../components/API/API";


class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true,
            about: {},
            employments: [],
            projects: []
        }
    }

    componentDidMount() {
        Promise.all([
            API.getAllEntryByType('about'),
            API.getAllEntryByType('educations', true),
            API.getAllEntryByType('employments', true),
            API.getAllEntryByType('projects', true),
        ])
            .then(result => {
                this.setState({
                    isFetching: false,
                    about: result[0].items,
                    educations: result[1].items,
                    employments: result[2].items,
                    projects: result[3].items,
                })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    isFetching: false
                });
            })
    }

    render() {
        return (
            <>
                <Heading size={2} className="has-text-left global-padding global-heading">About</Heading>
                <AboutSection about={this.state.about} isFetching={this.state.isFetching} />
                <Heading size={2} className="has-text-left global-padding global-heading">Educations</Heading>
                <EducationSection educations={this.state.educations} isFetching={this.state.isFetching} />
                <Heading size={2} className="has-text-left global-padding global-heading">Employments</Heading>
                <EmploymentSection employments={this.state.employments} isFetching={this.state.isFetching} />
                <Heading size={2} className="has-text-left global-padding global-heading">Portfolio</Heading>
                <PortfolioSection projects={this.state.projects} isFetching={this.state.isFetching} />
            </>
        );
    }
}

export default IndexPage;