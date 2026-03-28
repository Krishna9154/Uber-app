import React from 'react'

const LocationSearchPanel = (props) => {

  const location =[
    "24B, Near Kapoor's cafe, Institute of Technology and Management",
    "24B, Near Kapoor's cafe, Institute of Technology and Management",
    "24B, Near Kapoor's cafe, Institute of Technology and Management",
    "24B, Near Kapoor's cafe, Institute of Technology and Management"
  ]

  return (

    <div className=''>

      {
        location.map((e,idx)=>{
          return  <div key={idx} onClick={()=>{props.setvechilePanelOpen(true)
            props.setPanelOpen(false)
          }} className='flex flex-row items-center mb-4 border-2 border-white active:border-black p-2 rounded-xl'>
          <h1 className='mr-4 bg-[#eeee] rounded-4xl h-8 w-12 flex justify-center items-center'><i className="ri-map-pin-fill text-lg"></i></h1>
            <h2>{e}</h2>
          </div>
        })
      }



    </div>
  )
}

export default LocationSearchPanel