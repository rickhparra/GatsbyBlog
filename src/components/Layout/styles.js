import styled from 'styled-components';

import { Color, Heights, Widths } from '../../styles/constants';

export const Page = styled.section`
  display: block;
  background-color: ${Color.background};
`;

export const Body = styled.main`
  min-height: 100vh;
  width: 100%;
  margin: ${Heights.headerLg} 0 ${Heights.footer};
  padding: ${Heights.topContentPadding} 0 ${Heights.botContentPadding};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${Widths.lg};
`;