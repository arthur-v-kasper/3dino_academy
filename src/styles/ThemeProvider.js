import React from 'react'
import { ThemeProvider as StyledProvider} from 'styled-components';

export const ThemeName = {
  light: "light",
  ocean: "ocean"
}

const light = {
  colors: {
    primary: {
      main: "#ffc117",
      dark: "#c79100",
      ligh: "#fff350",
      text: "#212121"
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121"
    }
  }
};

const allThemes = {
  light, 
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#2196f3",
        dark: "#1769aa",
        ligh: "#4dabf5",
        text: "#fff"
      }
    }
  }
};

const ThemeProvider = ({ theme ,children}) => (
  <StyledProvider theme={allThemes[theme]}>
    {children}
  </StyledProvider>
);

ThemeProvider.defaultProps = {
  theme: "light"
};

export default ThemeProvider;
