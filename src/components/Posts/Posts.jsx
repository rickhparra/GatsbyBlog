import React from 'react';
import { Link } from 'gatsby';

import PostCard from '../PostCard';

import { Container } from './styles';

export default function Posts ({ data }) {
  const { edges } = data.allMarkdownRemark;
  const posts = (
    edges.map(({ node }) => (
      <PostCard 
        key={node.id}
        slug={node.fields.slug}
        date={node.frontmatter.date}
        title={node.frontmatter.title}
        description={node.frontmatter.description}
      />
    ))
  );

  return (
    <Container>
      { posts }
    </Container>
  );
}

/*<div key={node.fields.slug} className="post">
    <Link to={node.fields.slug} className="post-title"><h2>{node.frontmatter.title}</h2></Link>
    <p className="post-date">{node.frontmatter.date}</p>
    <p>{node.frontmatter.description}</p>
  </div>*/