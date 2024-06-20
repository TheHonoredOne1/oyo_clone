import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Hotel = () => {
    return (
        <div className='border-2 border-red-500  rounded-lg h-72 w-full mb-5 p-5'>
            <div className="flex">
                <Image src={'https://publish.purewow.net/wp-content/uploads/sites/2/2019/08/agama.jpg?fit=728%2C524'} alt='image' width={200} height={200} className='h-60 w-96 mr-3' />

                <div className="grid grid-rows-3 gap-2">
                    <Image src={'https://publish.purewow.net/wp-content/uploads/sites/2/2019/08/agama.jpg?fit=728%2C524'} alt='image' width={200} height={200} className=' w-24 mr-3' />
                    <Image src={'https://publish.purewow.net/wp-content/uploads/sites/2/2019/08/agama.jpg?fit=728%2C524'} alt='image' width={200} height={200} className=' w-24 mr-3' />
                    <Image src={'https://publish.purewow.net/wp-content/uploads/sites/2/2019/08/agama.jpg?fit=728%2C524'} alt='image' width={200} height={200} className=' w-24 mr-3' />
                </div>

                <div className='ml-20' >
                    <h2 className='font-bold text-2xl line-clamp-1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dignissimos?
                    </h2>
                    <p className='text-justify my-5 text-lg'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem in veritatis obcaecati at! Optio deserunt, id quod dicta fugiat possimus veniam eveniet praesentium reprehenderit eius illum neque delectus, iusto repellendus?
                    </p>
                    <p className='text-2xl my-5 '>
                        <span className="font-bold">Facilities : </span>
                        <span>Free Wifi, Pet Care, Swimming Pool, Beaches, Resort</span>
                    </p>

                    <div className='flex items-center'>
                        <button className='w-60 h-14 rounded-lg bg-blue-400 text-lg'> Price: 4500</button>
                        <Link href={'hotels/2'} className='text-xl font-bold text-red-600 ml-10'>See Details</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hotel
