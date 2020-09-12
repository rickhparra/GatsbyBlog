import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Container, Link, GithubIcon, LinkedinIcon } from './styles';

export default function Footer () {
  const {
    site: {
      siteMetadata: { social }, 
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            githubUrl
            linkedinUrl
          }
        }
      }
    }
  `);

  return (
    <Container>
      <div>
        <Link href={social.githubUrl} title="GitHub">
          <GithubIcon />
        </Link>
        <Link href={social.linkedinUrl} title="Linkedin">
          <LinkedinIcon />
        </Link>
      </div>
    </Container>
  );
};