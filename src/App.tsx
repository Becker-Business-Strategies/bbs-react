import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Expertise from "./pages/Expertise";
import ClientListPage from "./pages/ClientList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/clients" element={<ClientListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
