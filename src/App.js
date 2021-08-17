import React from "react";

// import all components
import Header from "./components/header";
import Shortner from "./components/Shorten";
import AboutSection from "./components/about";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Header />
      <Shortner />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;
