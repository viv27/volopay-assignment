import {useEffect, useState} from 'react'
import './App.css';
import Main from './components/main/Main'
import data from './data'
import Search from './components/search/Search'
import Nav from './components/navigation/Nav'
import Your from './components/your/Your'
import Blocked from './components/blocked/Blocked'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  let [userArray,setUserArray] = useState([])
  let [filter,setFilter] =useState("")
  let [query,setQuery] = useState("")
  
  return (
    <div className="App">
    
      <Nav/>
    <Routes>
      <Route exact path="/" element={<><Search setFilter={setFilter} userArray={userArray} setQuery={setQuery} /> <Main userArray ={userArray} filter={filter} query={query} setUserArray={setUserArray}/></>}/>
      <Route path="/yours" element ={<Your userArray={userArray}/>}/>
      <Route path="/blocked" element={<Blocked/>}/>
      
     
    </Routes> 
      
    </div>
  );
}

export default App;
