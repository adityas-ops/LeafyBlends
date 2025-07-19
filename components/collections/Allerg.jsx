import React from 'react'

function Allerg({ selectedItems = [], onItemChange }) {
    const allerg = ["Lactos-free","Gluten-free","Nuts-free","Soy-free"]
  return (
    <>
      <div className="w-full h-full">
        {allerg.map((items, index) => {
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

export default Allerg