import React, { Component } from "react";
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SocialProfileWithImage from './Components/Course';
import { CalendarIcon } from "@chakra-ui/icons";

function App () {
  return (
    <div className="App">
      <Nav/>
      <div className ="course">
      <SocialProfileWithImage name = "Campain JS " Course="JS" startdate="12/12/2022" enddate="10/10/2023" date ="1"/>
      <SocialProfileWithImage name = "Campain Python " Course="Python" startdate="5/6/2020" enddate="10/10/2020" date="13" />
      <SocialProfileWithImage name = "Campain C# " Course="C#" startdate="6/7/2023" enddate="19/5/2023" date="9" />
      <SocialProfileWithImage name = "Campain C " Course="C" startdate="25/9/2024" enddate="24/10/2024"  date="5"/>
      <SocialProfileWithImage name = "Campain Java " Course="Java" startdate="22/7/2023" enddate="10/10/2024"  date="5"/>
      <SocialProfileWithImage name = "Campain C++ " Course="C++" startdate="12/12/2020" enddate="10/10/2021" date="20" />
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
