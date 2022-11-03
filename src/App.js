// import React, { Component , useState , useEffect } from "react";
import './App.css';
// import Nav from './Components/Nav';
// import Footer from './Components/Footer';
// import SocialProfileWithImage from './Components/Course';
// import { CalendarIcon } from "@chakra-ui/icons";
// import FilterSearch from "./Components/Searchbar";
// import LoginForm from "./Components/Login_page";


import Routers from './Components/Router'

// import axios from "axios";
// import Postata from './Components/Postata'


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
      <Routers/>
        </div>
       
  );
}

export default App;
