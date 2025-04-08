import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Register from "./pages/Register";
import QuestList from "./pages/QuestList";
import Login from "./pages/Login";
import CreateQuest from "./pages/CreateQuest";
import Profile from "./pages/Profile"


import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<Register />} />
        <Route path='/quest-list' element={<QuestList />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-quest' element={<CreateQuest />} />
        <Route path='/profile' element={<Profile />} />


      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
