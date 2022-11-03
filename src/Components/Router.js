import React from 'react'
import { Form } from 'react-router-dom'
import{Routes,Route} from "react-router-dom"
import LoginForm from './Login_page'
import SocialProfileWithImage from './Course'
import Nav from './Nav'
import GetApi from './GetApi'

export default function Routers() {
  return (
    <div>

      
       <Routes>
        <Route path="Login_page" element={<LoginForm/>}></Route>
        <Route path="/data" element={<GetApi/>}></Route>
       </Routes>
       
    </div>
  )
}