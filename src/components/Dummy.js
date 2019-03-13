import React from "react";

export default props => {
    const uri = window.location.origin;
    return (
        <>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/vYFYcoKm9_Y"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </>
    );
};
