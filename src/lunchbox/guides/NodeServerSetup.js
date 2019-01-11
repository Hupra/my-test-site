import React, { useState } from "react";

export default () => {
    const [IP, setIP] = useState();
    const [email, setEmail] = useState();
    const [domains, setDomains] = useState();

    const generateDummyInfo = () => {
        setIP("XXX.XXX.XXX.XXX");
        setEmail("mail@mail.com");
        setDomains("website.com www.website.com");
    };

    return (
        <>
            <h2>Node Server Setup</h2>
            <h3>1. Create a droplet</h3>
            <div className="indent">
                <p>Go to digitalocean.com and make a new droplet from the NodeJS One-click app</p>
                <p>Forward your domain(s) to the new droplet</p>
            </div>

            <h3>2. Fillout the following information:</h3>
            <div className="indent">
                <input
                    className="simpleInput"
                    type="text"
                    placeholder="Droplet IP address"
                    value={IP}
                    onChange={e => setIP(e.target.value)}
                />
                <br />
                <input
                    className="simpleInput"
                    type="text"
                    placeholder="Valid email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <br />
                <input
                    className="simpleInput"
                    type="text"
                    placeholder="Domain names seperated by a space"
                    value={domains}
                    onChange={e => setDomains(e.target.value)}
                />
                <br />
                <button className="simpleButton" onClick={generateDummyInfo}>
                    Generate dummy information
                </button>
            </div>
            {email && IP && domains && (
                <>
                    <h3>3. Open a terminal and copy/paste the following commands</h3>
                    <ul className="notes">
                        <li>
                            <p>{`ssh root@${IP}`}</p>
                            <span>Open server</span>
                        </li>
                        <li>
                            <p>apt-get install git</p>
                            <span>Install git on server</span>
                        </li>
                        <li>
                            <p>{`ssh-keygen -t rsa -C "${email}"`}</p>
                            <span>Create SSH key for the server</span>
                        </li>
                        <li>
                            <p>vim .ssh/id_rsa.pub</p>
                            <span>Copy key from file and add it to your GitHub settings</span>
                        </li>
                        <li>
                            <p>npm install pm2 -g</p>
                            <span>Install pm2</span>
                        </li>
                        <li>
                            <p>apt-get update</p>
                            <span>Update stuff</span>
                        </li>
                        <li>
                            <p>apt-get install nginx</p>
                            <span>Install nginx</span>
                        </li>
                        <li>
                            <p>nano /etc/nginx/sites-enabled/default</p>
                            <span>Make sure the file looks like the below code</span>
                        </li>

                        <blockquote>
                            <label>#Green text is modified from original file</label>
                            {"server {"}
                            <p>root /var/www/html;</p>
                            <p>index index.html index.htm index.nginx-debian.html;</p>
                            <p>
                                server_name <span className="greenText">{domains}</span>;
                            </p>
                            <div className="indent">
                                location /{" {"}
                                <p>
                                    <span className="greenText">#</span>try_files $uri/ =404;
                                </p>
                                <p className="greenText">include proxy_params;</p>
                                <p className="greenText">proxy_pass http://localhost:8080;</p>
                                {"}"}
                            </div>
                            {"}"}
                        </blockquote>
                        <li>
                            <p>sudo nginx -t</p>
                            <span>Check everything is okay</span>
                        </li>
                        <li>
                            <p>service nginx restart</p>
                            <span>Restart nginx because we changed the conf file</span>
                        </li>
                    </ul>
                    <h3>4. Add SSL connection</h3>
                    <ul className="notes">
                        <span>Still writing in the terminal, watchout for questions in terminal</span>
                        <li>
                            <p>apt-get update</p>
                        </li>
                        <li>
                            <p>apt-get install software-properties-common</p>
                        </li>
                        <li>
                            <p>add-apt-repository universe</p>
                        </li>
                        <li>
                            <p>add-apt-repository ppa:certbot/certbot</p>
                        </li>
                        <li>
                            <p>apt-get update</p>
                        </li>
                        <li>
                            <p>apt-get install python-certbot-nginx</p>
                        </li>
                        <li>
                            <p>sudo certbot --nginx</p>
                        </li>
                    </ul>
                    <h3>5. Upload site</h3>
                    <ul className="notes">
                        <span>Still writing in the terminal</span>
                        <li>
                            <p>git clone -b gh-pages git@github.com:Hupra/my-test-site.git</p>
                            <span>download git project</span>
                        </li>
                        <li>
                            <p>pm2 serve my-test-site</p>
                            <span>starts downloaded project</span>
                        </li>
                    </ul>
                </>
            )}
        </>
    );
};
