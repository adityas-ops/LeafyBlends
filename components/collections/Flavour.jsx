import React from 'react'

function Flavour({ selectedItems = [], onItemChange }) {
const flavours = ["Spicy","Sweet","Citrus","Smooth","Fruity","Floral","Grassy","Minty","Bitter","Creamy"]
  return (
    <>
      <div className="w-full h-full">
        {flavours.map((items, index) => {
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

export default Flavour