
import { useEffect } from "react";
import EnterPinSection from "../component/section/EnterPinSection";

function EnterPin (){
  useEffect(() => {
        window.scrollTo(0, 0);
      });
  return(
  <main className="md:bg-primary w-full bg-white ">
    <section className="flex w-full h-[120vh]">
      <div className="bg-white flex-1 rounded-r-2xl">
        <EnterPinSection />
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center relative">
        <img
          className="absolute w-full h-full"
          src="/image/Ellipse 1.svg"
          alt="dim background"
        />
        <img
          className="relative z-10 mt-6"
          src="/image/aMan.png"
          alt="Wallet"
        />
      </div>
    </section>
  </main>
  )
};
export default EnterPin;