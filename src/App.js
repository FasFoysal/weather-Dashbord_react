import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Topnav from "./Topnav";
import Sidenav from "./Sidenav";
import Home from "./component/Home";
import Error from "./component/Error";
import About from "./component/About";
import Contract from "./component/Contract";
import Help from "./component/Help";
import Weather from "./component/Weather";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setLoading(false)
    },500)
  }, [])
  
  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <>
      <section className="nav">
      <div className="side">
          <Sidenav />
        </div>
        <div className="top">
          <Topnav />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/help" element={<Help />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </div>
        

       
      </section>
    </>
  );
};

export default App;
