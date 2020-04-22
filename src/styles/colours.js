const mainColours = {
  primary: '#495867', // Independence
  text: '#000000', // Black
  white: '#FFFFFF', // White
  offWhite: '#F7F7FF', //Titan White

  black: '#000000', // Black

  gray: '#cfcfc4', // Pastel Gray,
  lightGray: '#f1f1ee', //Desert Storm
  darkGray: '#adad9a', // Bud
};

export const lightThemeColours = {
  type: 'light',
  colours: {
    ...mainColours,
    text: '#000000', // Black
    background: '#F7F7FF', //Titan White
    link: '#0000ff', // blue
  },
};

export const darkThemeColours = {
  type: 'dark',
  colours: {
    ...mainColours,
    background: '#171717', // Tundora
    text: '#F7F7FF', // Titan White
    link: '#0088ff',
  },
};
