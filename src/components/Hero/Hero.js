import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Kweli Hall <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      I'm a Fullstack developer looking to build/design web apps, and learn new technologies
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1lQL1Qqy7BAvNyiWuuPFMKLuUfbc36QaFTAdLmrL7Yng/edit?usp=sharing'}> Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;