import Link from 'next/link';
import React from 'react';
import { AiFillCloud, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href ="/">
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#projects">
        <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#tech">
        <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#about">
        <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
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
    </Div3>
  </Container>
);

export default Header;
