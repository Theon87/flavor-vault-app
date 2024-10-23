// import { useState } from 'react'
// import react from 'react'
import { Outlet } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <div>
        <Navigation />

        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
