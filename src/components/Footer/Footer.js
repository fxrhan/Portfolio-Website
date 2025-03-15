import React from 'react';
import { AiFillCloud, AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { FaArrowUp } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, Slogan, SocialContainer, SocialIconsContainer, BackToTopButton } from './FooterStyles';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FooterWrapper>
      <SocialIconsContainer>
        <CompanyContainer>
          <figure className="quote"><blockquote>
          <Slogan><i><b><q> As cybersecurity leaders, we have to create our message of influence<br/> because security is 
            a culture and you need the business to take place <br/>and be part of that security culture. </q></b></i></Slogan></blockquote>
          </figure>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/fxrhan" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/farhan-ansari-386991215" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://twitter.com/fxrhanansari" target="_blank" rel="noopener noreferrer">
        <AiFillTwitterCircle size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.cloudskillsboost.google/public_profiles/5c6f5ebd-214b-4de9-a065-11801834a36f" target="_blank" rel="noopener noreferrer">
          <AiFillCloud size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>   
      <BackToTopButton onClick={scrollToTop}>
        <FaArrowUp />
      </BackToTopButton>
    </FooterWrapper>
  );
};

export default Footer;
