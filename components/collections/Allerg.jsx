import React from 'react'

function Allerg() {
    const allerg = ["Lactos-free","Gluten-free","Nuts-free","Soy-free"]
  return (
    <>
      <div className="w-full h-full">
        {allerg.map((items, index) => {
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

export default Allerg