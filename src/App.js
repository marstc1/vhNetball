import React, { useState, useMemo } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/sections/Header";
import Victoria from "./components/sections/Victoria";
import EventInfo from "./components/sections/EventInfo";
import Registration from "./components/sections/Registration";

import "./fonts/paulmaul-regular.woff";
import "./App.css";
import "./css/forms.css";
import "./css/modal.css";
import Footer from "./components/sections/Footer";
import { useScrollPosition } from "./hooks/useScrollPosition";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [isTransparentValue, setTransparencyValueOnScroll] = useState(true);

  useScrollPosition(
    ({ currPos }) => {
      const isTransparent = currPos.y === 0;
      if (isTransparent !== isTransparentValue)
        setTransparencyValueOnScroll(isTransparent);
    },
    [isTransparentValue]
  );

  return useMemo(
    () => (
      <div className='App'>
        <Modal />
        <Navbar isTransparent={isTransparentValue} />
        <Header />
        <Victoria />
        <EventInfo />
        <Registration />
        <Footer />
      </div>
    ),
    [isTransparentValue]
  );
}

export default App;
