import React from 'react';
import { AiFillCloud, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      {/* <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="tel:**********">**********</LinkItem>
      </LinkColumn> */}
      <LinkColumn>
      <LinkTitle>E-Mail</LinkTitle>
      <LinkItem href="mailto:therealbloodwolf@protonmail.com">therealbloodwolf@protonmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <figure class = "quote"><blockquote>
          <Slogan><i><b><q> As cybersecurity leaders, we have to create our message of influence<br/> because security is 
            a culture and you need the business to take place <br/>and be part of that security culture. </q></b></i></Slogan></blockquote>
            </figure>
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
