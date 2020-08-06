import React from 'react';
import App from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body > div:first-child,
  div#__next,
  div#__next > div,
  div#__next > div > div {
    height: 100%;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}
