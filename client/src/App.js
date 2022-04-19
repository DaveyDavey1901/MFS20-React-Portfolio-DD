import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { ThemeProvider } from "styled-components";
import {ThemeSize} from './components/Responsive/index'


function App() {
  return (
    <ThemeProvider theme={ThemeSize}>
      <>
        <Navbar />
        <HeroSection />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
