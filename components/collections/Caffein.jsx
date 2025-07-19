import React from 'react'

function Caffein({ selectedItems = [], onItemChange }) {
    const caffine = ["No Caffein","Low Caffein","Medium Caffein","High Caffein"]
  return (
    <>
      <div className="w-full h-full">
        {caffine.map((items, index) => {
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
  )
}

export default Caffein