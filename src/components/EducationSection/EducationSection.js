import React from 'react';
import moment from "moment-timezone";
import Columns from "react-bulma-components/lib/components/columns";
import Content from "react-bulma-components/lib/components/content";
import Heading from "react-bulma-components/lib/components/heading";

function formatDate(date) {
    return moment(date).tz("Asia/Jakarta").format("YYYY");
}

const EducationSection = (props) => {
    return (<>
        <Columns gapless>
            {
                !props.isFetching ?
                    props.educations.map(education => {
                        return (
                            <Columns.Column size={12} key={education.sys.id}>
                                <Content className="global-padding">
                                    <Heading size={4} className="has-text-left">{education.fields.name}</Heading>
                                    <Heading subtitle size={6} className="has-text-left has-text-grey">
                                        {education.fields.major}
                                        <br />
                                        <span className="has-text-weight-normal has-text-black">{`${formatDate(education.fields.startDate)} - ${formatDate(education.fields.endDate)}`}</span>
                                    </Heading>
                                </Content>
                            </Columns.Column>
                        );
                    })
                    : ""
            }
        </Columns>
    </>);
}

export default EducationSection;