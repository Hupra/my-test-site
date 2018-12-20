import React, { useState, useEffect } from "react";

export default () => {
    const [data, setData] = useState("Loading...");

    const user = JSON.parse(localStorage.getItem("user"));
    const url = "https://graph.facebook.com";
    console.log(user.accessToken);

    const getPhotos = () => {
        return fetch(
            `${url}/me/photos?access_token=${user.accessToken}&type=uploaded`
        ).then(res => res.json());
    };

    const getPhoto = id => {
        let curUrl = `${url}/${id}/likes?access_token=${
            user.accessToken
        }&summary=total_count`;

        return fetch(curUrl).then(res => res.json());
        //    .then(res => res.summary.total_count);
    };

    useEffect(async () => {
        if (user) {
            //const photos = await getPhotos();
            //const photoTest = await getPhoto("10210498509484127");
            //console.log("photoTest", photoTest);
        }

        // const content = photos.data.map(item => getPhoto(item.id));

        // console.log("content", await content);
        // setData();
    }, []);

    return (
        <>
            <div>Photos</div>
            <div>{data}</div>
        </>
    );
};
