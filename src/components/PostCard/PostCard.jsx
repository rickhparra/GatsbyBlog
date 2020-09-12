import React from 'react';

import {
  Container,  
  Content,  
  Title,
  Description  
} from './styles';

export default function PostCard({
  slug,
  date,
  title,
  description,  
  tags  
}) {
  return (
    <Container to={`/${slug}`}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
}