'use client'
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-start">
      {/* Background Image */}
      <Image
        src="/image.PNG"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

        {/* Floating Trapezium */}
  <div className="absolute left-0 top-0 w-[55%] h-full -z-[5]">
    <Image 
      src="/trapezium.png" 
      alt="Trapezium Background" 
      layout="fill"
      objectFit="cover"
    />
  </div>

  {/* Content Inside Trapezium */}
  <div className="absolute left-[5%] top-1/4 w-full max-w-lg p-4 text-white z-10">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left leading-tight">
      <span className="inline">"Transform your Home with</span>
      <span className="block">Colors that Inspire!"</span>
    </h2>
    <ul className="mt-2 text-base sm:text-lg">
      <li>⭐ Personalised Interior Painting</li>
      <li>⭐ Internal Painting</li>
      <li>⭐ External Painting</li>
    </ul>
    <button className="mt-4 px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 rounded-lg shadow-lg text-white text-sm sm:text-base">
      Get Started
    </button>
  </div>

  {/* Square Image with Quote */}
<div className="absolute right-[5%] top-[15%] w-[30%] h-auto shadow-2xl z-10">
  <Image 
    src="/sq.png" 
    alt="Square Image" 
    width={400} 
    height={700} 
    className="object-cover w-full h-full"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <h3 className="text-2xl font-bold italic text-white leading-tight">
      Enhance your home's interior <br /> with expert painting.
    </h3>
    <p className="text-lg mt-2 italic text-white opacity-80">
      Book a free consultation and bring your dream design to life.
    </p>
    <button className="mt-6 px-6 py-3 bg-orange-500 rounded-lg shadow-lg text-white text-md">
      Get Quote
    </button>
  </div>
</div>
</div>
  );
}
