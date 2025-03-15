import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Farhan Ansari
      </SectionTitle>
      <SectionText>
        I'm a Cyber-Security Engineer passionate about creating secure digital environments. With expertise in network security, penetration testing, and security analysis, I help organizations protect their valuable data and systems.
      </SectionText>
      <Button onClick={() => window.location = 'https://linktr.ee/Fxrhan'}>Connect With Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;