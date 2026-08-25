import React from 'react'

const LocationSearchPanel = ({Suggession , setPickup, setDestination,activeInput}) => {

  return (

    <div className='mt-6'>

      {
        Suggession.map((value,idx)=>{
          return  <div
           key={idx} 
           onClick={()=>{

            if(activeInput==='pickup'){
              setPickup(value.display_name)
            }
            if(activeInput==='destination'){
              setDestination(value.display_name)
            }

          }} className='flex flex-row items-center mb-4  border-2 border-white active:border-black p-2 rounded-xl'>
          <h1 className='mr-4 bg-[#eeee] rounded-4xl h-8 w-12 flex justify-center items-center'><i className="ri-map-pin-fill text-lg"></i></h1>
            <h2>{value.display_name}</h2>
          </div>
        })
      }

    </div>
  )
} 

export default React.memo(LocationSearchPanel)