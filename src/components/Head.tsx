import React from "react"
import { Helmet } from "react-helmet";

import { head } from '../constans/head';

const Head: React.FC = () => {

    const { title, description, keywords, url } = head;
    return (
        <Helmet>
            <title>{title}</title>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:url" content={url} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
        </Helmet>
    );
}

export default Head;