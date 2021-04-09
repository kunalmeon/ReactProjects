import React, { useState } from "react";

const Tour = ({ data }) => {
  const [tourdata, setTourData] = useState([...data]);
  function deleteTour(id) {
    let newdata = tourdata.filter((tourToDelete) => tourToDelete.id != id);
    setTourData(newdata);
  }

  if (tourdata.length == 0) {
    return <div className="refresh">
      <button onClick={() => setTourData([...data])} >Refresh</button>;
 
    </div> }
  return (
    <div className="tour-container">
      <h2>Our Tours</h2>
      <div className="alltours">
        {tourdata.map((singleTour, index) => {
          return (
            <div key={index} className="touritem">
              <img src={singleTour.image} alt="" srcset="" />
              <h2>{singleTour.name}</h2>

              <div className="info">
                <p>{singleTour.info}</p>
                <h2>${singleTour.price}</h2>
              </div>
              <button onClick={() => deleteTour(singleTour.id)}>
                Delete Tour
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tour;
