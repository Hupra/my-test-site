//

export const qfetch = async (url, method = "GET", content) => {
    //create option object, and add method type
    const options = {
        method, // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json"
        }
    };

    //add content to options if set
    if (content) options.body = JSON.stringify(content);

    let json;
    try {
        const data = await fetch(url, options);
        json = await data.json();
    } catch (error) {
        json = error;
    }

    return json;
};

const cc = () => {
    let num = 50;
    let countUp = true;

    const ccc = () => {
        if (num > 75) countUp = false;
        if (num < 25) countUp = true;

        num += countUp ? 1 : -1;

        document.getElementById(
            "header"
        ).style.background = `linear-gradient(90deg, rgba(255,25,25,0.${100 -
            num}), rgba(255,25,25,0.50), rgba(255,25,25,0.${num})`;
    };

    setInterval(ccc, 150);
};
