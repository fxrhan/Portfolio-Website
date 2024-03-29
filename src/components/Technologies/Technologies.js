import React from 'react';
import { DiDlang, DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a lot of technologies from coding in different languages to processes such as Penetration Testing. Currently I am trying my hands on Cloud and Email Security and Web 3.0
    </SectionText>
    <List>
      <ListItem>
        <DiDlang size="3rem"/>
      <ListContainer>
        <ListTitle>Languages</ListTitle>
        <ListParagraph>
          Experience with <br/>
          HTML/CSS/JavaScript, Python, <br/>
          C/C++, Shell Scripting
        </ListParagraph>
      </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
      <ListContainer>
        <ListTitle>Tools</ListTitle>
        <ListParagraph>
          Experience with <br/>
          MetaSploit, SET, Burpsuite, <br/>
          Wireshark, Nmap and more...
        </ListParagraph>
      </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"/>
      <ListContainer>
        <ListTitle>Other Skills</ListTitle>
        <ListParagraph>
          Teamworker, Leadership qualities <br/>
          Out-of-box thinking, Problem Solving <br/>
          Social-Engineering 
        </ListParagraph>
      </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
