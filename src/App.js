import React, { Component , useState , useEffect } from "react";
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SocialProfileWithImage from './Components/Course';
import { CalendarIcon } from "@chakra-ui/icons";
import FilterSearch from "./Components/Searchbar";
import LoginForm from "./Components/Login_page";
import { Routes, Route } from 'react-router-dom';
import Routers from "./Components/Router";
import axios from "axios";
import Postata from './Components/Postata'


function App () {
  // const [state, setstate] = useState([])
  //   useEffect(() =>{
  //     axios.get("https://636242477521369cd068dfa6.mockapi.io/ToDo").then((res) =>{
  //       console.log((res));
  //       setstate(res.data)
  //     })
  //   })
  //   console.log(state);
  // const [state, setstate] =useState([])

  // useEffect (() => {
  //   axios.get("https://rickandmortyapi.com/api/character").then((res)=>{
  //     console.log(res.data.results);
  //     setstate(res.data.results)
      
  //   })
        
  // })
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
        {/* {state.map(items => {
          return(`
            
           <div className="imgdiv">
           <img src={items.image}/>
            <p>Name:{items.name}</p>
           </div>
            
          )
        })} */}
        {/* <Postata/> */}
        {/* {state.map((e)=>(
          <div className="getdisplay">
               <h3>First Name:{e.fName} </h3>
               <h3>Last Name:{e.lName}</h3>
               <h3 >email:{e.email} </h3>
               <h3 >password:{e.pass} </h3>
          </div>
        ))} */}
      
       
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
        
      </footer>
    </div>
  );
}

export default App;
