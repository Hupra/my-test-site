import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let fbContent = "";

    const responseFacebook = response => {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(response));
        setIsLoggedIn(true);
    };

    if (isLoggedIn) {
        fbContent = <div>Already Logged in</div>;
    } else {
        fbContent = (
            <FacebookLogin
                appId="256482431714198"
                autoLoad={true}
                fields="name,email,picture"
                scope="user_photos,user_posts,user_videos"
                callback={responseFacebook}
            />
        );
    }
    return (
        <>
            {fbContent}
            <button onClick={() => setIsLoggedIn(false)}>Sign out</button>
        </>
    );
};
