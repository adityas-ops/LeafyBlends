import React from 'react'

function Boxes() {
  const collections = ["Black Teas","Green Teas","White Teas","Chai","Matcha","Herbal Teas","Oolang","Rooibos","Teaware"]
  return (
   <>
   <div className='w-full h-full'>
   {
    collections.map((items,index)=>{
      return(
        <div id={index} className="w-full h-full flex justify-start items-center">
      <input  type="checkbox"/>
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