import React from 'react';

import { Container, SpaceContainer , Content, Brand, Heading, Code } from './styles';

import Avatar from '../../components/Avatar';

export default function Header () {
  return (
    <Container>
      <SpaceContainer>
        <Content to='/'>
          <Brand>
            <Avatar />            
            <Heading>
              <Code>{'<'}</Code>
                Ricardo Parra
              <Code>{' />'}</Code>
            </Heading>
          </Brand>
        </Content>
      </SpaceContainer>      
    </Container>
  );
};