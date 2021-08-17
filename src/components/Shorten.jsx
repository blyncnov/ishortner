import React, { useState } from 'react'
import { db } from "../firebase"
import { v4 as uuidv4 } from "uuid";
import { LinkContainer, Constraint } from "../styles/linkComponents"

const Shortner = () => {
    const [url, setUrl] = useState("");
    const [hide, show] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let suburl = uuidv4();
        var length = 5;
        let code = suburl.substring(0, length)
        await db.collection("urls").add({
            url: url,
            code: code,
        });
        const link = code;
        show(!hide)
        const info = "This is your URL - " + window.location.href + link;
        alert(info);
        console.log(link);
    };

    return (
        <>
            <LinkContainer>
                <Constraint>
                    <form onSubmit={handleSubmit}>
                        <input
                            value={url}
                            type="text"
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter the URL here..." />
                        <button type="submit">Shorten</button>
                    </form>
                    <br />
                    <p>By clicking SHORTEN, you are agreeing to iShortner Terms of Service and Privacy Policy</p>
                    <div>
                        <div className="golink">
                            <br />
                            <div className={hide ? "golinkox hide" : "golinkox show"}>
                                <h3>Here is your Link Details</h3>
                                <br />
                                <h5 style={{ color: "gray" }}> Original link</h5>
                                <br />
                                <h5 style={{ color: "blue" }}>Shortened link : <span><a style={{ color: "red" }} href="/">Click to view link</a></span></h5>
                            </div>
                        </div>
                    </div>
                </Constraint>
            </LinkContainer>
        </>
    )
}

export default Shortner;

