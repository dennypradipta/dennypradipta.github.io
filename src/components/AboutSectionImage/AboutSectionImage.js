import React, { useState, useEffect } from 'react';
import Image from "react-bulma-components/lib/components/image";

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
            <Image rounded size={128} src={!isFetching ? media : ""} />
        </a>
    );
}

export default ProjectCardImage;