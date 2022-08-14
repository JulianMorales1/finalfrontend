import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navBar';
import HomePage from './Pages/homePage';
import LoginPage from './Pages/loginPage';
import RegistrationPage from './Pages/registrationPage';
import React, { useState, useEffect } from 'react';
import ToDoList from './components/toDoList';
//import Todo from './components/toDo';

function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  return (

    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<NavBar
            isAuthLoading={isAuthLoading} setIsAuthLoading={setIsAuthLoading} />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage
              isAuthLoading={isAuthLoading} setIsAuthLoading={setIsAuthLoading} />} />
            <Route path="registration" element={<RegistrationPage
              isAuthLoading={isAuthLoading} setIsAuthLoading={setIsAuthLoading} />} />


          </Route>
          <Route path='/todos' element={<ToDoList />}></Route>
        </Routes>
      </header>
    </div>

  );
}

export default App;

