import Image from 'next/image'

const Society = () => {
  return (
    <div className='my-20 w-[1400px] m-auto'>
        <div className='flex flex-col gap-15'>
            <Image  src="/Society.png" alt='' width={1600} height={100} />
            <div className='flex justify-between gap-10 '>
                <div className='w-150 flex flex-col gap-10'>
                <h1 className='font-bold text-4xl'>Society & Commercial Building Painting</h1>
                <p className='w-120'>Enhance the beauty and durability of your society & commercial buildings with our professional painting services. We provide high-quality, weather-resistant coatings that ensure long-lasting protection and a fresh, vibrant look. Let us transform your space with precision and expertise!</p>
                </div>
                <div className='w-100 flex flex-col gap-10'>
                    <p className='font-[500] text-[20px]'>Available Hours*</p>
                <div>
                <div className='flex justify-between border-b-1 border-b-grey-500 pb-5'>
                        <p className='font-bold'>Monday - Friday</p>
                        <div className='flex gap-3'>
                            <Image src="/TimeCircle.png" alt='' width={30} height={10} />
                            <p>09.00 am - 07.00pm</p>
                        </div>
                    </div>
                    <div className='flex justify-between pt-5'>
                        <p className='font-bold'>Sunday</p>
                        <div className='flex gap-3'>
                            <Image src="/TimeCircle.png" alt='' width={30} height={10} />
                            <p className='w-35'>Holiday</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Society