import React from 'react'
import './card.css'
function card({value,currency,card_type,expiry,limit,name,spent_value,spent_currency,budget_name,user}) {

  let new_width = (spent_value / (spent_value + value))* 100;
  
  return (
    <div className="card-container">

        <div className="card-name">
          <div className="card-name-title">
            <div className="card-name-title-main">{name}</div>
            <div className="card-name-title-sub">{`${user} • ${budget_name}`}</div>
          </div>
          <div className="card-name-icon"><i class="fa-solid fa-fire-flame-curved"></i></div>
        </div>

        <div className="card-type">
          <div className="card-type-title">{card_type}</div>
          <div className="card-type-subtitle">{card_type === "Burner" ? `Expires: ${expiry} `:`August Limit: ${limit} SGD`}</div>
        </div>

        <div className="card-bar">
         
          <div className="card-bar-two" style={{width:`${new_width}%`}} ></div>
        </div>

        <div className="card-spent">
          <div className="card-spent-left">
            <div className="card-spent-left-circle"></div>
            <div className="card-spent-left-text">Spent</div>
          </div>
          <div className="card-spent-right">{`${spent_value} ${spent_currency}`}</div>
        </div>

        <div className="card-available">
          <div className="card-available-left">
            <div className="card-available-left-circle"></div>
            <div className="card-available-left-text">Available to spend</div>
          </div>
          <div className="card-available-right">{`${value} ${currency}`}</div>
        </div>

    </div>
  )
}

export default card