import { createGlobalStyle } from 'styled-components';

import {
  RobotoBlackItalicTTF,
  RobotoBlackTTF,
  RobotoBoldItalicTTF,
  RobotoBoldTTF,
  RobotoItalicTTF,
  RobotoLightItalicTTF,
  RobotoLightTTF,
  RobotoMediumItalicTTF,
  RobotoMediumTTF,
  RobotoRegularTTF,
  RobotoThinItalicTTF,
  RobotoThinTTF,
} from './assets/fonts/Roboto';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoRegularTTF}) format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBoldItalicTTF}) format('truetype');
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoItalicTTF}) format('truetype');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBoldTTF}) format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBlackTTF}) format('truetype');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoThinTTF}) format('truetype');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoThinItalicTTF}) format('truetype');
  font-weight: 100;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoMediumTTF}) format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoMediumItalicTTF}) format('truetype');
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoLightItalicTTF}) format('truetype');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoLightTTF}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBlackItalicTTF}) format('truetype');
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}
`;

export default GlobalStyles;
