import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from './pages/Product';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
