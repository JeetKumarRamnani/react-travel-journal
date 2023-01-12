import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  const cards = data.map((items) => {
    return <Main key={items.imageUrl} item={items} />;
  });
  return (
    <div className="app-container">
      <Header />
      {cards}
      <Footer />
    </div>
  );
}

export default App;
