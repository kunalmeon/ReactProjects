import React from "react";

const Categories = ({ menuItems }) => {
  return (
    <div className="allItems">
      {menuItems.map((singleItem, index) => {
        return (
          <div className="singleItemDetails">
           <div className="singleItem">
           <img src={singleItem.img} alt="" />
           
           <div className="details">
           <h2>{singleItem.title}</h2>
            <h5>${singleItem.price}</h5>
            <p>{singleItem.desc}</p>
           </div>
           </div>
           
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
