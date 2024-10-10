import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header/Header';
import OptionsChain from './Pages/OptionsChain/OptionsChain';

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<OptionsChain type={"NIFTYNXT50"} />} />
        <Route path="/banknifty" element={<OptionsChain type={"BANKNIFTY"} />} />
        {/* <Route path="/sensex" element={<OptionsChain type={"SENSEX"} />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
