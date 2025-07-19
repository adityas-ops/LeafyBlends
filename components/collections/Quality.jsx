import React from 'react'

function Quality({ selectedItems = [], onItemChange }) {
    const quality = ["Detox","Energy","Relax","Digestion"]
  return (
    <>
      <div className="w-full h-full">
        {quality.map((items, index) => {
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

export default Quality