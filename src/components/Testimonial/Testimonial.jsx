import React from 'react'

import Image from 'next/image'
const Testimonial = () => {
return (
    <div>
    <div className="relative w-full h-[500px]">
        <Image
            src="/Testimonial.png"
            alt="Testimonial"
            width={1300}
            height={500}
            className="w-full h-full object-cover rounded-xs"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-50 p-8 text-center rounded-lg">
            <h2 className="text-4xl font-bold">Testimonial</h2>
            <p className="text-lg mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallies. Tempor facillisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam nunc habitant placerat arcu accuman.
            </p>
        </div>
        </div>
    </div>
)
}

export default Testimonial
