import React from 'react'

function Boxes({ selectedItems = [], onItemChange }) {
  const collections = ["Black Teas","Green Teas","White Teas","Chai","Matcha","Herbal Teas","Oolang","Rooibos","Teaware"]
  return (
   <>
   <div className='w-full h-full'>
   {
    collections.map((items,index)=>{
      return(
        <div key={index} className="w-full h-full flex justify-start items-center">
          <input 
            type="checkbox"
            checked={selectedItems.includes(items)}
            onChange={() => onItemChange && onItemChange(items)}
          />
          <label className='pl-2'>{items}</label>
        </div>
      )
    })
   }
   </div>
   </>
  )
}

export default Boxes