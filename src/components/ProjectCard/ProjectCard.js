import React from "react";
import moment from "moment-timezone";
import Card from "react-bulma-components/lib/components/card";
import Content from "react-bulma-components/lib/components/content";
import Heading from "react-bulma-components/lib/components/heading";
import Columns from "react-bulma-components/lib/components/columns";

import ProjectCardImage from "../ProjectCardImage/ProjectCardImage";
import TechnologyIcon from "components/TechnologyIcon/TechnologyIcon";

function formatDate(date) {
  return moment(date).tz("Asia/Jakarta").format("MMM YYYY");
}

const ProjectCard = (props) => {
  return (
    <div className="global-padding">
      <Card>
        <ProjectCardImage
          data={props.data.fields.image.sys.id}
          link={props.data.fields.link}
        />
        <Card.Content>
          <Content>
            <Heading className="has-text-left" size={4}>
              <a
                href={props.data.fields.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.data.fields.title}
              </a>
            </Heading>
            <p className="has-text-left">{props.data.fields.description}</p>
            <Columns className="is-centered is-flex-mobile is-tablet-block">
              {props.data.fields.technologies.map((technology) => {
                return (
                  <TechnologyIcon technology={technology} key={technology} />
                );
              })}
            </Columns>
            <p className="has-text-right has-text-grey">
              {`${formatDate(props.data.fields.startDate)} - ${formatDate(
                props.data.fields.endDate
              )}`}
            </p>
          </Content>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProjectCard;
