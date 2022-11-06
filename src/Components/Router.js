// import React from 'react'
// // import { Form } from 'react-router-dom'
// import{Routes,Route} from "react-router-dom"
// import Loginpage from './Login_page'
// // import SocialProfileWithImage from './Course'
// import Nav from './Nav'
// import GetApi from './GetApi'
// import Update from './UpdateApi'
// import Delete from './DeleApi'

// export default function Routers() {
//   return (
//     <div>

//       <Nav />
//        <Routes>
//         <Route path="/Login_page" element={<Loginpage/>}></Route>
//         <Route path="/data" element={<GetApi/>}></Route>
//         <Route path="/Update" element={<Update/>}></Route>
//         <Route path="/Delete" element={<Delete/>}></Route>

//        </Routes>
    
       
//     </div>
//   )
// }
import { Routes, Route } from "react-router-dom";
import GetApi from './GetApi';
import ReadApi from "./ReadApi";
import Nav from "./Nav";
import Footer from './Footer'

function Routers() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/data" element={<GetApi />} />
        <Route path="/Readapi/:cId" element={<ReadApi />} />
      </Routes>
      
    </>
  );
}

export default Routers;