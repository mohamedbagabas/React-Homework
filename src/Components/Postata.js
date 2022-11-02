import React , {useState} from "react";
import axios from "axios";

function Create(){
const [fName , setfName] = useState()
const [lName , setlName] = useState()
const [email , setemail] = useState()
const [pass , setpass] = useState()
let url ="https://636242477521369cd068dfa6.mockapi.io/ToDo"
const postData = () =>{
    axios.post(url,{
        fName,
        lName,
        email,
        pass
    }).then(res =>{
        console.log(res);
    })
}
return(
    <div>
        <input placeholder="Fname"onChange={e=>{setfName(e.target.value) }}></input>
        <input placeholder="Lname"onChange={e=>{setlName(e.target.value) }}></input>
        <input placeholder="email"onChange={e=>{setemail(e.target.value) }}></input>
        <input  type = "password" placeholder="password" onChange={e=>{setpass(e.target.value) }}></input>
        <button onClick={postData}>loging</button>
    </div>
)



}
export default Create;