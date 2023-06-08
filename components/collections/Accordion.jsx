import { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className=''>
      <button
        className="flex justify-between items-center w-full  py-2 px-4 mb-0 rounded-lg focus:outline-none"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-[400]">{title}</h3>
       <p className='text-[24px] font-medium'>
        {isOpen?"-" : "+"}
       </p>
      </button>
      {isOpen && <div className=" py-1 px-4">{content}</div>}
      <div className='w-full h-full flex justify-center items-center'>
      <hr className='bg-black w-[200px] h-[2px]' />
    </div>
    </div>
    
</>
  );
};

export default Accordion;
