import React, { createContext, useReducer} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Home from "./components/Home/Home";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Leaderboard2 from "./components/Leaderboard2/Leaderboard2";
import Thankyou from "./components/Thankyou/Thankyou";
import Signup from "./components/Signup/Signup";
import Errorpage from "./components/Errorpage/Errorpage";
import {initialState, reducer } from "../src/reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => { 
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/leaderboard2" element={<Leaderboard2 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/thankyou" element={<Thankyou />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value = {{state, dispatch}}>
        <Routing />
        <Navbar />
      </UserContext.Provider>
    </>
  )
}
export default App
