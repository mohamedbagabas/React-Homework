import React, { Component } from "react";
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
// import SocialProfileWithImage from './Components/Course';
import { CalendarIcon } from "@chakra-ui/icons";
import Login from "./Components/Login_page";

function App () {
  return (
    <div className="App">
      <Nav/>
      <Login/>
      <div className ="course">
      {/* <SocialProfileWithImage name = "Campain JS " Course="JS" startdate={("2023-10-12")} enddate={("2024-5-10")} />
      <SocialProfileWithImage name = "Campain Python " Course="Python" startdate={"2020,6,12"} enddate={'2021,10,9'}/>
      <SocialProfileWithImage name = "Campain C# " Course="C#" startdate={"2023"} enddate={"2024"}  />
      <SocialProfileWithImage name = "Campain C " Course="C" sta  startdate={2023} enddate={2024}  />
      <SocialProfileWithImage name = "Campain Java " Course="Java" startdate={2023} enddate={2024}/>
      <SocialProfileWithImage name = "Campain C++ " Course="C++" startdate={("2020")} enddate={(2021)}/> */
      }
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
