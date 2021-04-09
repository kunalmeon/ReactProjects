import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [toursData, setToursData] = useState([]);
async function fetchData(){
  
  let response=await fetch(url);
  let data=await response.json();
  setToursData(data)
  console.log(data)
  setLoading(false)
}
  useEffect(() => {
   fetchData()
  }, []);
  if (loading) {
    return <div className="loading">
      <h1>Loading....</h1>
    </div>
  }
  else return <Tours toursData={toursData}></Tours>
}

export default App;
