import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiFillCloud, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, MobileIcon, NavMenu } from './HeaderStyles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container scrolled={scrolled}>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            <DiCssdeck size="3rem" /> <Span>Farhan</Span>
          </a>
        </Link>
      </Div1>
      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu isOpen={isOpen}>
        <Div2>
          <li>
            <Link href="#projects">
              <NavLink onClick={() => setIsOpen(false)}>Projects</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#tech">
              <NavLink onClick={() => setIsOpen(false)}>Technologies</NavLink>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <NavLink onClick={() => setIsOpen(false)}>About</NavLink>
            </Link>
          </li>
        </Div2>
        <Div3>
          <SocialIcons href="https://github.com/fxrhan" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/farhan-ansari-386991215" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/fxrhanansari" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.cloudskillsboost.google/public_profiles/5c6f5ebd-214b-4de9-a065-11801834a36f" target="_blank" rel="noopener noreferrer">
            <AiFillCloud size="3rem" />
          </SocialIcons>
        </Div3>
      </NavMenu>
    </Container>
  );
};

export default Header;
