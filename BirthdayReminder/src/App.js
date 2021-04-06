import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [birthdayData, setBirthdayData] = useState([...data]);
  var birthdays = birthdayData.length;
  
  if(birthdays!=0){
    return (
      <div className="birthdayreminder">
        <h3>{birthdays} birthdays today</h3>
        <div className="birthdays">
          {birthdayData.map((birthdayperson)=>{
            return(
              <div className='bdayperson'>
                <img src={birthdayperson.image} alt="" srcset=""/>
            <h3>{birthdayperson.name}</h3>
            <p>{birthdayperson.age} years</p>
              </div>
            )
          })}
        </div>
        <button onClick={()=>setBirthdayData([])} className='btn'>Clear All</button>
      </div>
    );
  }
  if(birthdays==0){
    return <div  className='loadBtn'>
      <button onClick={()=>setBirthdayData([...data])}>Load</button>
    </div>
  }
}

export default App;


