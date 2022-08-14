// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React from 'react'
// const App = () => {
//   return (
//     <div>
//       <h1>Hello world</h1>
//     </div>
//   )
// }
// export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//class level components
// Component is usually comes from react
// import React,{Component} from 'react'

// export default class App extends Component {
//   state = {
//     name : "learning React from React.JS"
//   }
//   render(){
//     return (
//       <div>
//           <h2>welcome to {this.state.name}</h2>
//       </div>
//     )
//   }
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React, {useState} from 'react'

// const App = () => {
//   const [name,setName] = useState("learning react");
//   return(
//     <div>
//       <h2>welcome to {name}!!!!!!!!</h2>
//     </div>
//   )
// }
// export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// here class level components are liked by all the users but after () because in react this feature
// is introduced life cycle and statehooks we are using react hooks in functional level component not in class level component

//state and props in class level component
//what is state? in order to insert multiple value for variables in component we use state (41-52)
//what is prop? in order to values from one component to another component we use props
// import React,{Component} from 'react'
// import Display from './display.js';
// export default class App extends Component {
//   state = {
//     name : "learning React from React.JS"
//   }
//   render(){
//     return (
//       <div>
//         <center>
//         <Display name = {this.state.name}/>
//         </center>
//       </div>
//     )
//   }
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React from "react";
// import './App.css'

// const App = () => {
//   return (
//     <div>
//       <h1 className="class">hello how are u</h1> //if whole container follow class then give className to div not for h1 tag
//     </div>
//   )
// }
// export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Example of inline styling
// import React from "react";

// const App = () => {
//   return (
//     <div style={{margin:"20px"}}>
//       <h1 style={{color:"white", backgroundColor:"lightgray", textAlign:"center",padding:"50px"}}>hello how are u</h1>
//     </div>
//   )
// }
// export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//outline css
// import React from "react";

// function App(){
//     const cssProp = {
//       color: "white",
//       backgroundColor: "skyblue",
//       textAlign: "center",
//       padding: "50px"
//     }
//     return (
//       <div style={{margin: "10px"}}>
//         <h1 style={cssProp}>Welcome to my world</h1>
//       </div>
//     )
// }
// export default App
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//onClick event handeler
//perticularly this onClick event handeler is used useState 
// import React from "react";

// function App(){
//   return(
//     <div>
//       {/* <button onClick={() => console.log("clicked")}>Click Here</button> */}
//       <h1 onClick={() => console.log("clicked")}>Click Here</h1>
//     </div>
//   )
// }
// export default App
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//useState {} => this will be used in functional level components
// when ever we click on button value will changes as per setName
// import React,{useState} from "react";

// function App(){
//   const [name,setName] = useState("Santhosh");
//   return (
//     <div>
//       <center>
//         <h1>{name}</h1>
//         <button onClick={() => setName("Sumanth")}> Change </button>
//       </center>
//     </div>
//   )
// }
// export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React,{useState} from "react";

// function App(){
//   const [name,setName] = useState("Santhosh");
//   return (
//     <div>
//       <center>
//         <h1>{name}</h1>
//         <button onClick={() => setName("Sumanth")}> Change </button>
//       </center>
//     </div>
//   )
// }
// export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React,{useState} from "react";

// function App(){
//   const[count,setName] = useState(0)
//   return(
//     <div>
//       <center>
//         <h1>{count}</h1>
//         <button onClick={() => setName(count+1)}><h3>Change</h3></button>
//       </center>
//     </div>
//   )
// }
// export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//useEffect {} it is a function hook means it will execute after the return statement
// and it is life cycle and use effect is a function or a method
// useEffect will take 2 parameters one is function and another one is dependencies

// import React,{useState,useEffect} from "react";

// function App(){
//   const[count,setCount] = useState(0);
//   // useEffect(() => console.log("clicked"),[count])
//   useEffect(() => console.log(count),[count])
//   return (
//     <div>
//       <p> You clicked {count} times</p>
//       <button onClick={() => setCount(count+1)}> Click me </button>
//     </div>
//   )
// }
// export default App
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//OnChange Event Handler
// it will take the data from the user and it will asign data to perticular variable

// import React,{useState} from "react";

// function App(){
//   const [user,setUser] = useState("")
//   const handler = e => {
//     setUser(e.target.value)
//   }
//   return (
//     <div>
//       <center>
//         <input type="text" placeholder="userName" value={user} name="user"
//         onChange={handler}
//         /> <br/>
//         {user}
//       </center>
//     </div>
//   )
// }
// export default App
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//onSumit{} handler will submit data given by the user in the backend or in dataBase
// import React,{useState} from "react";

// function App(){
//   const[data,setData] = useState({
//     userName:'',
//     password:'',
//   });

//   const {userName,password} = data
//   const onChange = e => {
//     setData({...data,[e.target.name]:[e.target.value]})
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     console.log(data);
//   }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
//           <input type="text" name="userName" value={userName}
//           onChange={onChange} placeholder="userName"/>
//           <br/>
//           <input type="password" name="password" value={password}
//           onChange={onChange} placeholder="password"/><br/> {password}
//           <br/>
//           <input type= "submit" name="submit"/>
//         </form>
//       </center>
//     </div>
//   )
// }
// export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React from "react";
// function App(){
//   const arr = ["reactJS", "Angular","NodeJS","ExpressJS","python"]
//   return(
//     <div>
//       {
//         arr.map(
//           (value,index) => <li key={index}>{index+1}{value}</li>
//         )
//       }
//     </div>
//   );
// }
// export default App
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React from "react";
// function App(){
//   const obj = [
//     {
//       id:1,
//       title:"reactJS"
//     },
//     {
//       id:2,
//       title:"NodeJS"
//     },
//     {
//       id:3,
//       title:"AngularJS"
//     },
//     {
//       id:4,
//       title:"ExpressJS"
//     },
//   ]
//   return(
//     <div>
//       {
//         obj.map(
//           (value) => <li key={value.id}>{value.title}</li>
//         )
//       }
//     </div>
//   );
//}
//export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React from 'react'

// export const Header = () => {
//   return (
//     <div>
//       <h2>Header</h2>
//     </div>
//   )
// }

// if u given export like this then u need to import import {Header} from '/.components/Headers'
// if u given export default then u need to import like import Header from '/.components/Headers'
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// create Sign Up form with react
// onClick, onChange, onSubmit need to know and object destructuring 
// validations for userName should be length more than 5

// import react, {useState} from 'react'

// function App() {
//   const [data, setData] = useState({
//     userName : '',
//     email : '',
//     password : '',
//     conformPassword : '',
//   })
//   const{userName, email, password, conformPassword} = data
//   const changeHandler = e => {
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     if(userName.length <= 5){
//       alert("userName should be at least 5 characters")
//     }
//     else if(password !== conformPassword){
//       alert("passwords are not matching")
//     }else{
//       console.log(data)
//     }
//   }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
//           <input type = 'text' name='userName'placeholder='userName' value={userName} onChange={changeHandler}/><br/>
//           <input type = 'email' name='email' placeholder='email' value={email} onChange={changeHandler}/><br/>
//           <input type = 'password' name='password' placeholder='password' value={password} onChange={changeHandler}/><br/>
//           <input type = 'password' name='conformPassword' placeholder='conformPassword' value={conformPassword} onChange={changeHandler}/><br/>
//           {password !== conformPassword ? <p style={{"color":"red"}}>passwords not matching</p> : null}
//           <input type= 'submit' name='submit'/><br/>
//         </form>
//       </center>
//     </div>
//   )
// }
// export default App
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, {useState} from 'react'

// const App = () => {
//   const [input,setInput] = useState("");
//   const [result,setResult] = useState(0)
//   const handler = e => {
//     setInput(e.target.value)
//   }
//   return(
//     <div>
//       <center>
//         <input type="text" value={input} name='input' onChange={handler}/><br/>
//         <button onClick={() => setResult(eval(input))}>Result</button>
//         <h4>Result is : {result}</h4>
//         <button onClick={() => setInput(input+'1')}>1</button>
//         <button onClick={() => setInput(input+'2')}>2</button>
//         <button onClick={() => setInput(input+'3')}>3</button>
//         <button onClick={() => setInput(input+'4')}>4</button>
//         <button onClick={() => setInput(input+'5')}>5</button><br/>
//         <button onClick={() => setInput(input+'6')}>6</button>
//         <button onClick={() => setInput(input+'7')}>7</button>
//         <button onClick={() => setInput(input+'8')}>8</button>
//         <button onClick={() => setInput(input+'9')}>9</button>
//         <button onClick={() => setInput(input+'0')}>0</button><br/>
//         <button onClick={() => setInput(input+'+')}>+</button>
//         <button onClick={() => setInput(input+'-')}>-</button>
//         <button onClick={() => setInput(input+'*')}>*</button>
//         <button onClick={() => setInput(input+'/')}>/</button>
//         <button onClick={() => setInput('')}>clr</button><br/>
//       </center>
//     </div>
//   )
// }

// export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React,{useEffect,useState} from 'react'

// const App = () => {
//   const [data,setData] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos').then(
//       response => response.json()
//     ).then(json => setData(json))
//   },[])
//   return(
//     <div>
//       {data.map(item => <li key={item.id}>{item.title}</li>)}
//     </div>
//   )
// }
// export default App
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// import React, {useEffect,useState} from 'react'
// import axios from 'axios'

// const App = () => {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then(
//       response => setData(response.data)
//     )
//   },[])
//   return(
//     <div>
//       {data.map(items => <li key = {items.id}>{items.title}</li>)}
//     </div>
//   )
// }
// export default App
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// create Sign Up form with react
// onClick, onChange, onSubmit need to know and object destructuring 
// validations for userName should be length more than 5
// adding real time database to the reactJS

// import react, {useState} from 'react'
// import axios from 'axios'

// function App() {
//   const [data, setData] = useState({
//     userName : '',
//     email : '',
//     password : '',
//     conformPassword : '',
//   })
//   const{userName, email, password, conformPassword} = data
//   const changeHandler = e => {
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const submitHandler = e => {
//     e.preventDefault();
//     if(userName.length <= 5){
//       alert("userName should be at least 5 characters")
//     }
//     else if(password !== conformPassword){
//       alert("passwords are not matching")
//     }else{
//       //axios.put, axios.get, axios.put, axios.delete
//       axios.post('https://signupform-ef83e-default-rtdb.firebaseio.com/register.json',data).then(()=> alert("Submited successfully"))
//     }
//   }
//   return (
//     <div>
//       <center>
//         <form onSubmit={submitHandler}>
//           <input type = 'text' name='userName'placeholder='userName' value={userName} onChange={changeHandler}/><br/>
//           <input type = 'email' name='email' placeholder='email' value={email} onChange={changeHandler}/><br/>
//           <input type = 'password' name='password' placeholder='password' value={password} onChange={changeHandler}/><br/>
//           <input type = 'password' name='conformPassword' placeholder='conformPassword' value={conformPassword} onChange={changeHandler}/><br/>
//           {password !== conformPassword ? <p style={{"color":"red"}}>passwords not matching</p> : null}
//           <input type= 'submit' name='submit'/><br/>
//         </form>
//       </center>
//     </div>
//   )
// }
// export default App
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//prefer multiple page application rather than single page application because of fast response and showing 
//unnecessary data  for this need to install package ==> npm install react-router-dom <==

import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home'
import DashBoard from './DashBoard'
import About from './About'

const App = () => {
    return (
        <div>
            <BrowserRouter>
             <Navbar />
             <Routes>
                <Route path='/Home' exact components={Home} />
                <Route path='/DashBoard' exact components={DashBoard} />
                <Route path='/About' exact components={About} />
             </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App