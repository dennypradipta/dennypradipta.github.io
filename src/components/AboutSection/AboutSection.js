import React from "react";
import Columns from "react-bulma-components/lib/components/columns";
import Content from "react-bulma-components/lib/components/content";
import Heading from "react-bulma-components/lib/components/heading";

import AboutSectionImage from "../AboutSectionImage/AboutSectionImage";
import TechnologyIcon from "../TechnologyIcon/TechnologyIcon";

const AboutSection = props => {
  return (
    <Columns gapless>
      <Columns.Column className="global-padding">
        <Content>
          {!props.isFetching
            ? props.about.map(data => {
                return (
                  <div className="global-padding" key={data.sys.id}>
                    <AboutSectionImage data={data.fields.photo.sys.id} />
                    <Heading size={4} className="has-text-left has-text-white">
                      {data.fields.name}
                    </Heading>
                    <Heading
                      subtitle
                      size={6}
                      className="has-text-left has-text-white"
                    >
                      {data.fields.title}
                    </Heading>
                    <p className="has-text-left">{data.fields.description}</p>
                    <Heading size={6} className="has-text-left has-text-white">
                      Preferred Technologies:
                    </Heading>
                    <Heading subtitle>
                      <Columns className="global-padding">
                        {data.fields.skills.map(skill => {
                          return (
                            <TechnologyIcon technology={skill} key={skill} />
                          );
                        })}
                      </Columns>
                    </Heading>
                  </div>
                );
              })
            : ""}
        </Content>
      </Columns.Column>
    </Columns>
  );
};

export default AboutSection;
