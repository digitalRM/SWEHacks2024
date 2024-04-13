'use client'

import { useState } from "react"


const listOfImpediments = [
  {
    name: "Ss",
    key: 0,
    description: "The 's' sound is hard to pronounce."
  },
  {
    name: "Rr",
    key: 1,
    description: "The 'r' sound is hard to pronounce."
  },
  {
    name: "Th",
    key: 2,
    description: "The 'th' sound is hard to pronounce."
  },
  {
    name: "Zz",
    key: 3,
    description: "The 'z' sound is hard to pronounce."
  },
]



export default function ImpedimentsOnboarding({ setImpediments }) {

  const [selectedImpediments, setSelectedImpediments] = useState({ 0: false, 1: false, 2: false, 3: false })

  function toggleImpediment(impediment) {
    setSelectedImpediments((prev) => {
      return {...prev,[impediment]:!prev[impediment] }
    })
  }

  return (
    <div className="flex flex-col items-center justify-center w-full lg:-mt-24">
      <h1 className="text-4xl font-semibold tracking-tight text-center">What sounds do you struggle with?</h1>

      <div className="grid grid-cols-2 md:flex flex-col md:flex-row  items-center justify-center w-full mt-4 max-w-4xl">
        {listOfImpediments.map((impediment) => (
          <div key={impediment.key} className="flex sm:flex-row items-center justify-center w-full mt-4">
            <button className={`mr-2 mt-1 text-center font-semibold text-5xl focus:ring-neutral-500 focus:border-neutral-500 block w-full h-full shadow-sm border-2 rounded-md md:aspect-square bg-neutral-50 dark:hover:bg-bray-800 dark:bg-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:hover:border-neutral-500 dark:hover:bg-neutral-600 transition border-neutral-300 border-dashed aspect-square ${selectedImpediments[impediment.key] ? "border-orange-500 dark:border-orange-500 bg-orange-500 dark:bg-orange-500 text-black hover:bg-orange-400  hover:dark:bg-orange-400 hover:border-orange-500 hover:dark:border-orange-500 focus:ring-orange-600 focus:border-orange-600" : ""}`} onClick={() => {
              toggleImpediment(impediment.key)
            }}>
              {impediment.name}
            </button>
          </div>
        ))}

        
      </div>
      {Object.values(selectedImpediments).includes(true) ? <button className="mt-4 w-full py-2 text-lg font-semibold text-center text-black bg-orange-500 dark:bg-orange-500 rounded-md hover:bg-orange-400 dark:hover:bg-orange-400 transition" 
        onClick={() => {
          setImpediments(Object.keys(selectedImpediments).filter((key) => selectedImpediments[key]).map((key) => listOfImpediments[key]))
        }}
      >Next</button> : <div />}

      


    </div>
  )
}
