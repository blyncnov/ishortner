import React from 'react'

import {
    AboutContainer, AboutColumn, AboutRow, AboutCard,
    AboutCardRow
} from "../styles/aboutstyle"

const AboutSection = () => {
    return (
        <div>
            <AboutContainer>
                <AboutColumn>
                    <AboutRow>
                        <div>
                            <h1>The link shortener that has your brand’s back</h1>
                            <p>Your brand wasn’t built to be hidden. Help it stand out with branded links that drive 34% more clicks.</p>
                        </div>
                        <AboutCard>
                            <AboutCardRow>
                                <h1>Boost results</h1>
                                <br />
                                <p>On top of better deliverability and click-through, rich link-level data gives you crucial insight into your link engagement so your team can make smarter decisions around its content and communications.</p>
                            </AboutCardRow>
                            <AboutCardRow>
                                <h1>Gain Control</h1>
                                <br />
                                <p>Take credit for your content and learn more about how it’s consumed by enabling auto-branding—a feature that ensures your brand remains in any link someone shortens pointing to your website.</p>
                            </AboutCardRow>
                            <AboutCardRow>
                                <h1>Inspire Trust</h1>
                                <br />
                                <p>With more clicks comes increased brand recognition and consumer trust in your communications—which in turn inspires even more engagement with your links. (It’s a wonderful cycle.)</p>
                            </AboutCardRow>
                        </AboutCard>
                    </AboutRow>
                </AboutColumn>
            </AboutContainer>

        </div>
    )
}

export default AboutSection
