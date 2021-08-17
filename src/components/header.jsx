import React from 'react'

// import all components
import NavigationBar from './navigationBar'
import HeroSection from './heroSection'

// import all styled components
import { HeaderContainer } from "../styles/headerComponents"

const Header = () => {
    return (
        <>
            <HeaderContainer >
                <NavigationBar />
                <HeroSection />
            </HeaderContainer>
        </>
    )
}

export default Header
