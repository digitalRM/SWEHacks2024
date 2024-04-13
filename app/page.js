'use client';
import BooksList from "@/components/BooksList";
import ImpedimentsOnboarding from "@/components/ImpedimentsOnboarding";
import { useState } from "react";


export default function Home() {
  const [impediments, setImpediments] = useState([]);

  return (
    <main className="w-screen min-h-screen overflow-x-hidden scroll-smooth">  
        {impediments.length === 0  ? (
          <div className="flex-col flex justify-center items-center h-screen w-full">
            <div className="mx-auto max-w-[1440px] px-6 pt-6 lg:pt-10 lg:px-8 relative">
              <ImpedimentsOnboarding setImpediments={setImpediments} />
            </div>
          </div>
        ) :
          <div className="w-full h-full p-4 md:p-12 lg:p-24">
            <BooksList impediments={impediments} />
          </div>
        }

        

    </main>
  );
}
