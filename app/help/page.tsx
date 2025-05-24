'use client';

import Header from "@/ui/components/header";
import Footer from "@/ui/components/footer";
import NewsLetter from "@/ui/components/newsletter"; 
import FAQ from "@/ui/components/faq";


export default function Home() { 

  return (
   <>
    <Header/>

    <div className="min-h-[500px]">

      <div className="mx-auto 2xl:w-11/12 lg:px-8 px-6 ">
       
 
        <div className="w-full lg:w-7/12 text-center mx-auto pt-16 pb-8 lg:py-16 gap-6">
           <div className="text-center flex flex-col gap-4">
             <div className="text-brand-600 text-md">FAQs</div>
              <div className="text-gray-800 font-bold text-4xl lg:text-5xl">Help Center</div>
              <div className="text-base lg:text-xl text-gray-600">
                  Need something cleared up? Here are our most frequently asked questions.
              </div>
           </div>
        </div>
 
        <FAQ/>  


        <NewsLetter/>     
      
      </div>        

    </div>

    <Footer/>

   </>
  )

}
