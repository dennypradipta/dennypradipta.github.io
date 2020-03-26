import React from "react";
import moment from "moment-timezone";
import Columns from "react-bulma-components/lib/components/columns";
import Content from "react-bulma-components/lib/components/content";
import Heading from "react-bulma-components/lib/components/heading";

function formatDate(date) {
  return moment(date)
    .tz("Asia/Jakarta")
    .format("MMM YYYY");
}

const EmploymentSection = props => {
  return (
    <>
      <Columns gapless>
        {!props.isFetching
          ? props.employments.map((employment, index, array) => {
              return (
                <Columns.Column size={12} key={employment.sys.id}>
                  <Content className="global-padding">
                    <Heading size={4} className="has-text-left has-text-white">
                      {index !== 0
                        ? employment.fields.workplace !==
                          array[index - 1].fields.workplace
                          ? employment.fields.workplace
                          : ""
                        : employment.fields.workplace}
                    </Heading>
                    <Heading
                      subtitle
                      size={6}
                      className="has-text-left has-text-white"
                      style={{ marginLeft: "2rem" }}
                    >
                      {employment.fields.jobPosition}
                      <br />
                      <span className="has-text-weight-normal has-text-white">
                        {`${formatDate(employment.fields.startDate)} - ${
                          employment.fields.endDate ===
                          employment.fields.startDate
                            ? "Present"
                            : formatDate(employment.fields.endDate)
                        }`}
                      </span>
                    </Heading>
                  </Content>
                </Columns.Column>
              );
            })
          : ""}
      </Columns>
    </>
  );
};

export default EmploymentSection;
