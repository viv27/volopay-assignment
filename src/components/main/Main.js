import React,{useEffect, useState} from 'react'
import data from '../../data'
import Card from '../card/Card'
import './main.css'
import InfiniteScroll from 'react-infinite-scroll-component';
function Main({userArray,filter,query,setUserArray}) {
  console.log(filter)
  //
  const [items,setItems] = useState([])
  const [hasMore,setHasMore] = useState(true)
  const [page,setPage] = useState(2)

  useEffect(()=>{

    const getComments = async ()=>{
      const res = await fetch('http://localhost:3004/comments?_page=1&_limit=20')
      const data = await res.json()
      setItems(data)

    }
    getComments()

  },[])
  

  const fetchComments = async ()=>{
        const res = await fetch(`http://localhost:3004/comments?_page=${page}&_limit=10`)
        const data = await res.json();
        return data
      }
  const fetchData = async()=>{
   
      const commentsFormServer = await fetchComments()

      setItems([...items,...commentsFormServer])

      if(commentsFormServer.length === 0 || commentsFormServer.length < 10){
        setHasMore(false)
      }
      
      setPage(page+1)
      
  }
  function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
let users = items.map(t=> t.user)
let unique = users.filter(onlyUnique);



  return (
    <InfiniteScroll
    dataLength={items.length} //This is important field to render the next data
   next={fetchData}
  hasMore={hasMore}
  loader={<h4 style={{ textAlign: 'center'}}>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>End of Result!</b>
    </p>
   }
    >
    <div className="main_dashboard">
    {
      
      items.filter((val)=>{
        if(filter ==="" && query === ""){
          return val
        }
        else if(val.card_type === filter ){
          console.log("JIJIJI")
          return val;
        }
        else if(val.name.toLowerCase().includes(filter.toLowerCase())){
          return val
        }
      }).map(item => {
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
        return <Card 
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
       
        
        })
      
      }
      </div>
      </InfiniteScroll>

    



  )
}

export default Main