import React, { useContext } from 'react';


const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function Toolbar(props: any) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}

function ThemeContextDemo() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}


export default ThemeContextDemo;
