"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Product from "./products/page";
import AboutUs from "./about/page";
import ContactUs from "./contact/page";

export default function Home() {
  return (
    <>
      <section className="body-font bg-[#F2F0FF]">
        <div className="container mx-auto flex px-4 py-24 md:flex-row flex-col items-center">
          
      {/* Left Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8 md:mb-0">
            <Image 
              src="/hero2.png" 
              alt="Hekto Logo" 
              width={280}
              height={260} 
              className="mt-[-297px] ml-7 mr-20"
            />
            <Image 
              src="/dot.png" 
              alt="Decorative Dot" 
              width={12}
              height={20} 
              className="mt-10 ml-20"
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-[-260px] mr-[-150px]">
            <h3 className="text-[#FB2E86] font-bold text-2xl md:text-3xl">
              Best Furniture For Your Castle...
            </h3>
            <h1 className="title-font sm:text-5xl text-6xl mb-4 font-bold">
              New Furniture Collection Trends in 2020
            </h1>
            <p className="mb-8 leading-relaxed text-[#6b709b] text-sm md:text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis exercitationem fuga labore quaerat earum nisi.
            </p>

            <div className="flex justify-center mt-4">
              <Button className="text-white bg-pink-500 px-9 py-6 font-bold hover:bg-pink-600 transition-all duration-300">
                Shop Now
              </Button>
            </div>
          </div>

      {/* Right Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-6 md:mt-0">
            <Image 
              src="/hero1.png" 
              alt="Hekto Product" 
              width={450} 
              height={700} 
              className="rounded-lg ml-[60px]"
            />
          </div>
        </div>

    {/* Decorative Dot */}
        <Image 
          src="/dotee.png" 
          alt="Decorative Dot" 
          width={60} 
          height={60} 
          className="ml-[45%] pb-10"
        />
      </section>

    {/* About, Product, and Contact Sections */}
      <div>
        <AboutUs />
        <Product />
        <ContactUs />
      </div>


{/* Custom Media Query for Mobile Adjustments */}
<style jsx>{`
  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem !important; /* Slightly smaller heading */
      line-height: 1.2;
    }
    h3 {
      font-size: 1.8rem !important; /* Smaller but clear */
      line-height: 1.3;
    }
    p {
      font-size: 1rem !important; /* Ensure proper text readability */
    }
    .btn {
      width: 100%;
      font-size: 1.5rem;
      padding: 16px;
    }
  }
`}</style>

    </>
  );
}
