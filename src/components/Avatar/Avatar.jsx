import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Picture } from './styles';

export default function Avatar () {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 48, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <Picture
      fluid={image.childImageSharp.fluid}
      alt="Ricardo Parra"
      aria-label="Ricardo Parra"
    />
  );
}