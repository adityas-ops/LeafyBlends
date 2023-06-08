import React from 'react'

function Quality() {
    const quality = ["Detox","Energy","Relax","Digestion"]
  return (
    <>
      <div className="w-full h-full">
        {quality.map((items, index) => {
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

export default Quality