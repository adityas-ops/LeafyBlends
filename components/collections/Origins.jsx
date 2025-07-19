import React from "react";

function Origins({ selectedItems = [], onItemChange }) {
  const origin = ["India", "Japan", "Iran", "South Africa"];
  return (
    <>
      <div className="w-full h-full">
        {origin.map((items, index) => {
          return (
            <div
              key={index}
              className="w-full h-full flex justify-start items-center"
            >
              <input 
                type="checkbox" 
                checked={selectedItems.includes(items)}
                onChange={() => onItemChange && onItemChange(items)}
              />
              <label className="pl-2">{items}</label>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Origins;
