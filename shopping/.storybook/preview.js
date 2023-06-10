/** @jsx */
import './styles.css';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    css={css``}
  />
);

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyles component to all stories
  }),
];
