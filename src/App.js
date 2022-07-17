import React from "react";

import Main from "./components/Main";
import { ThemeProvider } from "./store/theme-context";

function App() {


  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
