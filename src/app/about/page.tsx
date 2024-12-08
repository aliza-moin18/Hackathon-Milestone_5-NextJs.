// "use client";

// import { Button } from '@/components/ui/button';
// import Image from 'next/image';

// function AboutUs() {
//   return (
//     <section className='mb-20 mt-1'>
//         <div className='w-full py-20 px-40 bg-[#F6F5FF] mb-8'>
//           <h2 className="text-5xl font-bold text-blue-950 mb-2">About 
//             <span className='text-pink-600'>  Us </span> </h2>
//             <span className='font-bold'> Home </span>
//             <span className='font-bold'>. Pages </span>
//             <span className='text-pink-600 font-bold'> . About Us</span>
//         </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="md:pr-8 ">
//                   <Image
//                       src="/About.png"
//                       alt="About Us Image"
//                       width={500}
//                       height={400}
//             className="rounded-lg shadow-md ml-20 mt-20 mr-[-60px]"
//             />
//         </div>

//             <div className='ml-[-60px]'>
//                 <h1 className="text-5xl font-bold text-blue-950 mb-7 mt-20 "> Know About Our Ecomerce Business, History </h1>
//                 <p className="text-md mb-4 text-gray-600">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor labore et dolore magna aliqua. laboris nisi ut aliquip ex ea commodo consequat in reprehenderit in voluptate velit esse Duis auter in reprehenderit.
//                 </p>
//                   <Button className="text-white text-xl px-7 py-7 font-bold hover:bg-pink-600 transition-all duration-300 mt-8"> Contact us </Button>
//               </div>
//           </div>

//     </section>
//   );
// }

// export default AboutUs;


"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';

function AboutUs() {
  return (
    <section className="mb-20 mt-1">
      {/* Header Section */}
      <div className="w-full py-20 px-4 md:px-40 bg-[#F6F5FF] mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-2">
          About <span className="text-pink-600">Us</span>
        </h2>
        <div className="flex flex-wrap mt-2">
          <span className="font-bold text-gray-600">Home</span>
          <span className="font-bold text-gray-600 mx-2">. Pages</span>
          <span className="text-pink-600 font-bold">. About Us</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
        
        {/* About Image Section */}
        <div className="relative">
          <Image
            src="/About.png"
            alt="About Us Image"
            width={500}
            height={400}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* About Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-4">
            Know About Our Ecommerce Business, History
          </h1>
          <p className="text-gray-600 text-md md:text-base mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor labore et dolore magna aliqua. 
            Laboris nisi ut aliquip ex ea commodo consequat in reprehenderit in voluptate velit esse Duis auter in reprehenderit.
          </p>
          <Button className="text-white text-xl px-6 py-4 font-bold bg-pink-500 hover:bg-pink-600 transition-all duration-300 mt-4">
            Contact Us
          </Button>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;