import React,{useEffect,useState} from 'react'
import Card from '../../components/card/Card'
import './your.css'
function Your({userArray}) {


  const [users,setUsers] = useState([])
  const [userId,setUserId] = useState("4")
  useEffect(() => {

    const getUsers =async()=>{
      const res = await fetch('http://localhost:3004/comments')
      const data = await res.json()
      setUsers(data)
      
    }
    getUsers()
  },[])
  let singleUserArray = users.filter(user => user.owner_id === userId)
  return (
    <>
    <h2 className="user-title">Your Cards</h2>
    <div className='single-user-container'>
      {singleUserArray.map(item=> {
        let value = item.available_to_spend.value;
        let currency = item.available_to_spend.currency;
        let card_type = item.card_type;
        let expiry = item.expiry;
        let limit = item.limit;
        let name = item.name;
        let spent_value = item.spent.value;
        let spent_currency = item.spent.currency;
        let budget_name = item.budget_name
        let user = item.user
        return<>
        
          <Card 
        value={value}
        currency = { currency }
        card_type={card_type}
        expiry = { expiry }
        limit = { limit }
        name = { name }
        spent_value = { spent_value }
        spent_currency = { spent_currency }
        budget_name = { budget_name }
        user = { user }
        />
        </>
        
        
        
      })}
    </div>
    </>
  )
}

export default Your