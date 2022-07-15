import Header from "./components/Header";
import { ThemeProvider } from "./store/theme-context";


function App() {

  return (
    <ThemeProvider>
      <div className="wrapper">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
