import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeProvider } from "./store/theme-context";


function App() {

  return (
    <ThemeProvider>
      <div className="wrapper">
        <Header />
        <Main/>
      </div>
    </ThemeProvider>
  );
}

export default App;
