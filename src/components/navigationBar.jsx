import React, { useState } from 'react'

import { FaBars, FaTimes } from "react-icons/fa"
import { LogoName, Navlinks } from "../data/navbarData"

// import all styled components
import {
    NavigationContainer, NavigationColumn,
    NavigationRow,
    Logo,
    NavigationLists,
    Mobile
} from "../styles/navigationComponents"

const NavigationBar = () => {
    const [clicked, isClicked] = useState(true);

    const ClickHandler = () => {
        isClicked(!clicked)
    }

    return (
        <>
            <NavigationContainer>
                <NavigationColumn>
                    <NavigationRow>
                        <Logo>
                            <h1>{LogoName.name}<span>{LogoName.des}</span></h1>
                        </Logo>

                        <NavigationLists click={clicked} onClick={ClickHandler}>

                            {Navlinks.map((links) => {
                                return (
                                    <div key={links.id}>
                                        <li><a href="/">{links.link}</a></li>
                                    </div>
                                )
                            })}

                        </NavigationLists>

                        <Mobile onClick={ClickHandler}>
                            {clicked ? <FaBars style={{ fontSize: "1.5em" }} /> : <FaTimes style={{ fontSize: "1.5em" }} />}
                        </Mobile>

                    </NavigationRow>
                </NavigationColumn>
            </NavigationContainer>
        </>
    )
}

export default NavigationBar
