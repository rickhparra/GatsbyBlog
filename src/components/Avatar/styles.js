import styled from 'styled-components';
import Image from 'gatsby-image';

import { Sizes } from '../../styles/constants';

export const Picture = styled(Image)`
  border-radius: 50%;
  height: ${Sizes.lg};
  width: ${Sizes.lg};  
`;