import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyles from '../../styles/global';

import Header from '../Header';
import Footer from '../Footer';

import { Page, Body, Container } from './styles';

export default function Layout ({ children }) {
  return (
    <Page>
      <GlobalStyles />

      <Header />

      <Body>
        <Container>{children}</Container>
      </Body>

      <Footer /> 
    </Page>
  );
};

Layout.prototype = {
  children: PropTypes.node.isRequired
};