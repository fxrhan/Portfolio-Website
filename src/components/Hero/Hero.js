import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hey there! I am Farhan Ansari, I am a Cyber-Security Enthusiast looking to connect with like-minded people.
      </SectionText>
      <Button onClick={() => window.location = 'https://linktr.ee/Fxrhan'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;