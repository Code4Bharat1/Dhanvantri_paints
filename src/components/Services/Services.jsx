import Image from 'next/image'

const Services = () => {
return (
    <div>
    <div className="relative w-full h-[500px]">
    <Image
        src="/service1.png"
        alt="Services"
        width={1300}
        height={500}
        className="w-full h-full object-cover rounded-xs"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white  bg-opacity-50 p-8 text-center rounded-lg">
        <h2 className="text-4xl font-bold">Services</h2>
        <p className="text-lg mt-4 max-w-2xl">
        At Dhannvantri Paints, we bring colors to life with precision, durability, and an artistic touch.
        Our expert team ensures high-quality finishes, using premium materials for long-lasting results.
        </p>
    </div>
    </div>
    <div className="flex justify-center items-center">
        <h1 className="text-4xl w-[720px] font-[600] text-[40px] my-10 text-center">
            Effortless And Quick Painting Solutions With Dhannvantri Paint Services.
        </h1>
    </div>

        <div className="flex items-center w-full px-0 py-0">
            <div className="w-1/2 ml-4">
                <Image src="/service.png" alt="Internal Painting" height={600} width={700}
                className="w-full h-auto object-cover"/>
        </div>
        <div className="w-1/2 p-6 mr-4">
        <h2 className="text-4xl">Internal Painting</h2>
        <p className="mt-4">
        Transform your interiors with flawless wall finishes. From vibrant shades to soothing pastels, we enhance your living spaces with colors that reflect your personality.
        </p>
        <button className="mt-4 bg-orange-400 text-white w-[120px] rounded-lg h-10 hover:bg-orange-500 transition">
        More Info
        </button>
    </div>
</div>

    <div className="flex items-center w-full px-0 py-0">
        <div className="w-1/2 p-6 ml-4">
        <h2 className="text-4xl">External Painting</h2>
        <p className="mt-4 text-lg">
        Give your home or commercial building a fresh, weather-resistant look.
        Our external painting services ensure long-lasting beauty and protection from harsh environmental elements.
        </p>
        <button className="mt-4 bg-orange-400 text-white w-[120px] rounded-lg h-10 hover:bg-orange-500 transition">
            More Info
        </button>
    </div>

    <div className="w-1/2 mr-4">
        <Image src="/service3.png" alt="External Painting" height={600} width={700}
        className="w-full h-auto object-cover"/>
    </div>
    </div>
    <div className="flex items-center w-full px-0 py-0">
            <div className="w-1/2 ml-4">
                <Image src="/service4.png" alt="Internal Painting" height={600} width={700}
                className="w-full h-auto object-cover"/>
        </div>
        <div className="w-1/2 p-6 mr-4">
        <h2 className="text-4xl">Waterproof Painting</h2>
        <p className="mt-4">
        Prevent leaks and moisture damage with our advanced waterproofing solutions. We use high-quality coatings to protect your walls and ensure longevity.
        </p>
        <button className="mt-4 bg-orange-400 text-white w-[120px] rounded-lg h-10 hover:bg-orange-500 transition">
        More Info
        </button>
    </div>
</div>

    <div className="flex items-center w-full px-0 py-0">
        <div className="w-1/2 p-6 ml-4">
        <h2 className="text-4xl">Repair Painting</h2>
        <p className="mt-4 text-lg">
        Restore old and won-out walks with our repair painting services. We fix cracks, peeling paint, and surface imperfections, making your walls.
        </p>
        <button className="mt-4 bg-orange-400 text-white w-[120px] rounded-lg h-10 hover:bg-orange-500 transition">
            More Info
        </button>
    </div>

    <div className="w-1/2 mr-4">
        <Image src="/service5.png" alt="External Painting" height={600} width={700}
        className="w-full h-auto object-cover"/>
    </div>
    </div>
    <div className="flex items-center w-full px-0 py-0">
            <div className="w-1/2 ml-4">
                <Image src="/service6.png" alt="Internal Painting" height={600} width={700}
                className="w-full h-auto object-cover"/>
        </div>
        <div className="w-1/2 p-6 mr-4">
        <h2 className="text-4xl">Security & Commercial Building Painting</h2>
        <p className="mt-4">
        Enhance the appeal of large residential and commercial spaces with our efficient and high-quality painting services. We cater to societies, offices, and industrial buildings with expertise and precision.
        </p>
        <button className="mt-4 bg-orange-400 text-white w-[120px] rounded-lg h-10 hover:bg-orange-500 transition">
        More Info
        </button>
    </div>
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

export default Services
