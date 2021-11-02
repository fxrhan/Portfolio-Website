import React from 'react';
import { AiFillCloud, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:9408765325">9408765325</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>E-Mail</LinkTitle>
      <LinkItem href="mailto:fxrhanansari@gmail.com">fxrhanansari@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>The Future Is Here</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href = "https://github.com/fxrhan">
          <AiFillGithub size = "3rem"/>
        </SocialIcons>
        <SocialIcons href = "https://www.linkedin.com/in/farhan-ansari-386991215">
          <AiFillLinkedin size = "3rem"/>
        </SocialIcons>
        <SocialIcons href = "https://twitter.com/fxrhanansari">
        <AiFillTwitterCircle size = "3rem"/>
        </SocialIcons>
        <SocialIcons href = "https://www.cloudskillsboost.google/public_profiles/5c6f5ebd-214b-4de9-a065-11801834a36f">
          <AiFillCloud size = "3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>   
    </FooterWrapper>
  );
};

export default Footer;
