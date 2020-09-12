import styled from 'styled-components';
import { Link } from 'gatsby';

import { Sizes, Color } from '../../styles/constants';

export const Container = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: column;

  background: ${Color.support};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);

  & + a {
    margin-top: ${Sizes.default};
  }
  &:hover {
    border: 1px solid ${Color.pink};
  }
`;

export const Content = styled.div`
  padding: ${Sizes.default} ${Sizes.md} 0 ${Sizes.md};
`;

export const Title = styled.h1`  
  margin-top: 1rem;
`;

export const Description = styled.h2` 
  margin-top: 1.3rem;
  &:not(:last-child) {
    margin-bottom: ${Sizes.default};
  }
`;