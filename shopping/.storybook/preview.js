/** @jsx jsx */
import './styles.css';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { Global, css, jsx} from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    `}
  />
);

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyles component to all stories
  }),
];
