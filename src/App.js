import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import Victoria from "./components/sections/Victoria";
import EventInfo from "./components/sections/EventInfo";
import Registration from "./components/sections/Registration";
import Footer from "./components/sections/Footer";

import "./fonts/paulmaul-regular.woff";

import "./App.css";
import "./css/nav.css";
import "./css/header.css";
import "./css/socialsBar.css";
import "./css/forms.css";
import "./css/footer.css";

const registrationOpen = false;

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Victoria />
      <EventInfo />
      {registrationOpen && <Registration />}
      <Footer />
    </div>
  );
}

export default App;
