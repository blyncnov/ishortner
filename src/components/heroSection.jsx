import React from 'react'

// import all styled components
import { HeroSectionContainer, HeroSectionColumn, HeroSectionRow } from "../styles/HeroSectionComponents"

const HeroSection = () => {
    return (
        <>
            <HeroSectionContainer>
                <HeroSectionColumn>
                    <HeroSectionRow>
                        <h1>Short links, big results analytics, Pixel URL Shortener</h1>
                        <p>A URL shortener built with powerful tools to help you grow and protect your brand. Your brand wasn’t built to be hidden.
                            Help it stand out with branded links that drive 34% more clicks.</p>
                        <button>Get Started For Free</button>
                    </HeroSectionRow>
                    <HeroSectionRow>
                        <img src="https://docrdsfx76ssb.cloudfront.net/static/1628801241/pages/wp-content/uploads/2019/08/Homepage-Branded-Links-Illustration-2.png" alt="" />
                    </HeroSectionRow>
                </HeroSectionColumn>
            </HeroSectionContainer>
        </>
    )
}

export default HeroSection
