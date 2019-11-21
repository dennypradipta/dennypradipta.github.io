import React from 'react';
import Columns from "react-bulma-components/lib/components/columns";

import ProjectCard from "../ProjectCard/ProjectCard";

const PortfolioSection = (props) => {
    return (
        <Columns gapless breakpoint="tablet">
            {!props.isFetching ?
                props.projects.map(project => {
                    return (
                        <Columns.Column size={4} key={project.sys.id}>
                            <ProjectCard data={project} />
                        </Columns.Column>
                    )
                }) :
                ""
            }
        </Columns>
    );
}

export default PortfolioSection;