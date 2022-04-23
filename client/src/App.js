import { ThemeProvider } from "styled-components";
import { ThemeSize } from "./components/Responsive/index";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

// pages
import { Home } from "./Pages/Homepage";
import { AboutMe } from "./Pages/AboutMe";
import { Portfolio } from "./Pages/Portfolio";
import { Contact } from "./Pages/Contact";
import { Blog } from "./Pages/Blog";
import { Login} from "./Pages/Login";




function App() {
  return (
    <ThemeProvider theme={ThemeSize}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
