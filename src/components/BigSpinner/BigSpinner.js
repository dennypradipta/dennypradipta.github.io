import React from "react";
import Loader from "react-bulma-components/lib/components/loader";
import { Columns } from "react-bulma-components";

const Spinner = (props) => {
  return (
    <Columns className="is-centered">
      <Columns.Column
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Loader
          style={{ width: "10rem", height: "10rem" }}
          className="has-text-centered"
        />
      </Columns.Column>
    </Columns>
  );
};

export default Spinner;
