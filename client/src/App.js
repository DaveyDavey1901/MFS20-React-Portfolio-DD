import { ThemeProvider } from "styled-components";
import { ThemeSize } from "./components/Responsive/index";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// pages
import { Home } from "./Pages/Homepage";
import { AboutMe } from "./Pages/AboutMe";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";
import { Blog } from "./Pages/Blog";

function App() {
  return (
    <ThemeProvider theme={ThemeSize}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
