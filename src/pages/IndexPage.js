import React, { lazy, Suspense, Component } from "react";
import moment from "moment-timezone";
import Heading from "react-bulma-components/lib/components/heading";

import API from "../components/API/API";
import DefaultNavbar from "components/DefaultNavbar/DefaultNavbar";
import BigSpinner from "../components/BigSpinner/BigSpinner";

const AboutSection = lazy(() => import("components/AboutSection/AboutSection"));
const EducationSection = lazy(() =>
  import("components/EducationSection/EducationSection")
);
const EmploymentSection = lazy(() =>
  import("components/EmploymentSection/EmploymentSection")
);
const PortfolioSection = lazy(() =>
  import("components/PortfolioSection/PortfolioSection")
);

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      about: {},
      employments: [],
      projects: [],
    };
  }

  componentDidMount() {
    Promise.all([
      API.getAllEntryByType("about"),
      API.getAllEntryByType("educations", true),
      API.getAllEntryByType("employments", true),
      API.getAllEntryByType("projects", true),
    ])
      .then((result) => {
        this.setState({
          isFetching: false,
          about: result[0].items,
          educations: result[1].items,
          employments: result[2].items,
          projects: result[3].items,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isFetching: false,
        });
      });
  }

  render() {
    if (this.state.isFetching) {
      return <BigSpinner />;
    }

    return (
      <Suspense fallback={<BigSpinner />}>
        <DefaultNavbar />
        <Heading
          id="about"
          size={2}
          className="has-text-left has-text-white global-padding global-heading"
        >
          About
        </Heading>
        <AboutSection
          about={this.state.about}
          isFetching={this.state.isFetching}
        />
        <Heading
          id="educations"
          size={2}
          className="has-text-left has-text-white global-padding global-heading"
        >
          Educations
        </Heading>
        <EducationSection
          educations={this.state.educations}
          isFetching={this.state.isFetching}
        />
        <Heading
          id="employments"
          size={2}
          className="has-text-left has-text-white global-padding global-heading"
        >
          Employments
        </Heading>
        <EmploymentSection
          employments={this.state.employments}
          isFetching={this.state.isFetching}
        />
        <Heading
          id="portfolios"
          size={2}
          className="has-text-left has-text-white global-padding global-heading"
        >
          Portfolios
        </Heading>
        <PortfolioSection
          projects={this.state.projects}
          isFetching={this.state.isFetching}
        />
        <p style={{ textAlign: "center", margin: "0 auto", padding: "1rem 0" }}>
          Copyright (C) Denny Pradipta {moment().format("YYYY")}
        </p>
      </Suspense>
    );
  }
}

export default IndexPage;
