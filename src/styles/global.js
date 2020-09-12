import { css, createGlobalStyle } from 'styled-components';

export const styles = css`
  @import url('https://fonts.googleapis.com/css?family=Fira+Code');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto', sans-serif;    
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  ol, ul {
    list-style: none;
  }
`;

export default createGlobalStyle`${styles}`;