

import React,{useState,useEffect} from 'react'
import './search.css'
function Search({setFilter}) {

  const [modalOpen,setModalOpen] = useState(false)
  const [subCheck,setSubCheck] = useState(false)
  const [burnerCheck,setBurnerCheck] = useState(false)
  const [result,setResult] = useState("")

  function handleSubChange(e){

    let {value,checked} = e.target;

    if(value === "Subscription" && checked === true){
      setSubCheck(true)
      setBurnerCheck(false)
    }
    else if(value === "Burner" && checked === true){
      setBurnerCheck(true)
      setSubCheck(false)
    }
    else{
      setBurnerCheck(false)
      setSubCheck(false)
    }



    if(checked){
      
      setResult(value)
    }
    else{
      setResult("")
      
    }
 }


  
  function handleSearch(){
    setFilter(result)
    setModalOpen(false)

  }
  function handleClear(){
    setBurnerCheck(false)
    setSubCheck(false)
    setFilter("")
    setModalOpen(false)

  }
  

 
  return (
    <div className="search-filter-bar">

      <div className="search-text">
        <input className="search-input" onChange={(e)=>setFilter(e.target.value)}  placeholder="Search Name" type="text" />
        <a href className="search-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </a>
        
      </div>
      <div className="search-filter">
        
        <button onClick={()=> setModalOpen(!modalOpen)} className="search-filter-button"><i class="fa-solid fa-arrow-down-wide-short"></i> Filter</button>
       {modalOpen &&<div className="search-filter-modal">
              <div className="search-filter-modal-title">Filters</div>
              <div className="search-filter-modal-type">
                <div className="search-filter-modal-type-name">Type</div>
                <div className="search-filter-modal-type-checkbox">
                 <label className="subscription-checkbox">Subscription
                  <input className="checkbox" type="checkbox" value="Subscription" checked={subCheck} onChange={(e)=> handleSubChange(e)}   />
                  
                    <span class="checkmark"></span>
                </label>
                <label class="burner-checkbox">Burner
                  <input type="checkbox" value="Burner" checked={burnerCheck}   onChange={ (e)=>handleSubChange(e)}  />
                    <span class="checkmark"></span>
                </label>
                </div>
              </div>
              {/* <div className="search-filter-modal-cardholder">
                <div className="search-filter-modal-cardholder-title">Cardholder</div>
                <div className="search-filter-modal-cardholder-dropdown">Select Cardholder</div>
                {/* {uniqueUsers.map(user=> console.log(user))} */}

              {/* </div> */} 
              <div className="search-filter-modal-buttons">
                <div>
                  <button className="search-filter-button-apply" onClick={()=>handleSearch()}>Apply</button>
                </div>
                <div>
                  <button className="search-filter-button-clear" onClick={()=>handleClear()}>Clear</button>
                </div>
              </div>
        </div>}
      </div>

    </div>
  )
}

export default Search