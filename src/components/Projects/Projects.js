import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
    {projects.map(({id, image, title, description, tags, source, visit}) => (
      <BlogCard key={id}>
        <Img src={image} alt={title} />
        <TitleContent>
          <HeaderThree title>{title}</HeaderThree>
          <Hr/>
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <UtilityList>
          {visit && (
            <ExternalLinks href={visit} target="_blank" rel="noopener noreferrer">
              <AiFillGithub size="2rem" style={{ marginRight: '0.5rem' }} />
              GitHub
            </ExternalLinks>
          )}
          {source && (
            <ExternalLinks href={source} target="_blank" rel="noopener noreferrer">
              <BiLinkExternal size="2rem" style={{ marginRight: '0.5rem' }} />
              Demo
            </ExternalLinks>
          )}
        </UtilityList>
      </BlogCard>
    ))}
    </GridContainer>
  </Section>
);

export default Projects;