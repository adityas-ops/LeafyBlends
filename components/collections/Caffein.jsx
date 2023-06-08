import React from 'react'

function Caffein() {
    const caffine = ["No Caffein","Low Caffein","Medium Caffein","High Caffein"]
  return (
    <>
      <div className="w-full h-full">
        {caffine.map((items, index) => {
          return (
            <div
              id={index}
              className="w-full h-full flex justify-start items-center"
            >
              <input type="checkbox" />
              <label className="pl-2">{items}</label>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Caffein