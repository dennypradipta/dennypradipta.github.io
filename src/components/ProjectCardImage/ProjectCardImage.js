import React, { useState, useEffect } from 'react';
import Card from "react-bulma-components/lib/components/card";

import API from "../API/API";

const ProjectCardImage = (props) => {
    const [isFetching, setIsFetching] = useState(true);

    const [media, setMedia] = useState();
    useEffect(() => {
        API.getAssetById(props.data)
            .then(value => {
                setIsFetching(false);
                setMedia(value.fields.file.url);
            })
            .catch(error => {
                console.log(error)
            });
    })

    return (
        <a href={props.link} target="_blank" rel="noreferrer noopener">
            <Card.Image src={!isFetching ? media : ""} />
        </a>
    );
}

export default ProjectCardImage;