import React, { Component , useState } from "react";
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SocialProfileWithImage from './Components/Course';
import { CalendarIcon } from "@chakra-ui/icons";
import FilterSearch from "./Components/Searchbar";
import LoginForm from "./Components/Login_page";
import { Routes, Route } from 'react-router-dom';
import Routers from "./Components/Router";

function App () {
  // const adminUser = {
  //   name: "Abdulkarim",
  //   password: "123",
  // };
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  // });

  // const [error, setError] = useState("");

  // const login = (details) => {
  //   console.log(details);

  //   if (
  //     details.name === adminUser.name &&
  //     details.password === adminUser.password
  //   ) {
  //     setUser({
  //       name: details.name,
  //       password: details.password,
  //     });
  //   } else {
  //     console.log("Details Do not Match");
  //     <div className="error"> {setError("Details Do not Match!!")}; </div>;
  //   }
  //   if (details.name === "" || details.password === "") {
  //     setError("All fields are required!!");
  //   }
  // };

  // const Logout = () => {
  //   setUser({ name: "", paassword: "" });
  // };

  return (
    
    
      <div className="App">
        
        
       
       <Routers />
        {/* <div className ="course">
       
       <SocialProfileWithImage name = "Campain JS " Course="JS" startdate={("2023-10-12")} enddate={("2024-5-10")} />
       <SocialProfileWithImage name = "Campain Python " Course="Python" startdate={"2022,6,12"} enddate={'2023,10,9'}/>
       <SocialProfileWithImage name = "Campain C# " Course="C#" startdate={"2023"} enddate={"2024"}  />
       <SocialProfileWithImage name = "Campain C " Course="C" sta  startdate={2023} enddate={2024}  />
       <SocialProfileWithImage name = "Campain Java " Course="Java" startdate={2023} enddate={2024}/>
       <SocialProfileWithImage name = "Campain C++ " Course="C++" startdate={("2020")} enddate={(2021)}/> 
       </div> */}
        
        
        {/* <Nav/>
        
        {user.name !== "" ? (
          <div className="login-form">
            <h2>
              Welcome
              <span>
                {user.name} <br />{" "}
                <span className="success"> You are logged in Successfully! </span>
              </span>
            </h2>
            <button onClick={Logout}> Logout </button>
          </div>
        ) : (
          <LoginForm login={login} error={error} />
        )} */}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
