import Image from 'next/image'
const Gallery = () => {
return (
    <div>
        <div className="relative w-full h-[500px]">
            <Image
                src="/Gallery.png"
                alt="Gallery"
                width={1300}
                height={500}
                className="w-full h-full object-cover rounded-xs"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-50 p-8 text-center rounded-lg">
                <h2 className="text-4xl font-bold">Gallery</h2>
                <p className="text-lg mt-4 max-w-2xl">
                Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallies. Tempor facillisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam nunc habitant placerat arcu accuman.
                </p>
            </div>
        </div>
        <div className="flex justify-center items-center">
            <h1 className="text-4xl w-[720px] font-[600] text-[40px] my-10 text-center">
            Spectacular Work from Our Painting Services
            </h1>
        </div>
        <div className="relative w-full h-[500px]">
            <Image
                src="/Promotion.png"
                alt="Promotion"
                width={1300}
                height={500}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white p-8 text-center">
                <h2 className='text-4xl w-[720px] font-[600] text-[40px] my-10 text-center'>Get <span className='text-orange-400'>Special Offer</span>For Today With Dhannvantri Paints</h2>
                <button className="mt-4 text-black bg-white rounded-lg shadow-lg px-6 py-3 font-semibold hover:bg-gray-200 transition">
                    Let's Try Dhannvantri
                </button>
            </div>
        </div>
    </div>
)
}

export default Gallery
