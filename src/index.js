import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const headerStyle = {
    color: "red",
    fontSize: "28px",
    textTransform: "uppercase",
  };
  return (
    <div>
      <h1 style={headerStyle}>Fast React Pizza Co.</h1>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 21;
  const isOpen = hour >= openHour && hour <= closedHour;
  const isOpenMessage = isOpen
    ? "We're currently open!!"
    : "Please come tomorrow!";

  return (
    <footer>
      {new Date().toLocaleTimeString()} {isOpenMessage}
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="pizza" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
