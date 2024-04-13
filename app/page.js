'use client';
import BooksList from "@/components/BooksList";
import ImpedimentsOnboarding from "@/components/ImpedimentsOnboarding";
import { useState } from "react";

import { useCookies } from 'next-client-cookies';


export default function Home() {
  const cookies = useCookies();




  const [impediments, setImpediments] = useState([cookies.get("impediments")]);





  return (
    <main className="w-screen min-h-screen overflow-x-hidden scroll-smooth">  
        {impediments[0] === undefined || impediments[0].length === 0 ? (
          <div className="flex-col flex justify-center items-center h-screen w-full">
            <div className="mx-auto max-w-[1440px] px-6 pt-6 lg:pt-10 lg:px-8 relative">
              <ImpedimentsOnboarding setImpediments={setImpediments} getImpediments={impediments} />
            </div>
          </div>
        ) :
          <div className="w-full h-full p-4 md:p-12 lg:p-24">
            {cookies.get("impediments")}
            <BooksList impediments={impediments} />
          </div>
        }

      
    </main>
  );
}
