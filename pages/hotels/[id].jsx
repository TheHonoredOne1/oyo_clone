import React from 'react'
import Image from 'next/image'
const SingleHotel = () => {
    return (
        <div className='w-7/12 mx-auto my-10'>
            <Image src={'https://publish.purewow.net/wp-content/uploads/sites/2/2019/08/agama.jpg?fit=728%2C524'} alt='image' width={2000} height={2000} className='h-large-box w-full mb-5'
            />
            <div className=''>
                <h3 className='text-3xl font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, exercitationem?.
                </h3>
                <p className='text-xl my-5 text-justify'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita officiis deserunt numquam quia aliquid enim, maxime odio, voluptatum nemo accusantium maiores, doloremque ex eos! Unde harum inventore sit hic vero. Quidem dicta neque id incidunt fugiat omnis error laboriosam ut nobis molestias at debitis necessitatibus, quasi enim, illum, asperiores illo!
                </p>
                <button className='w-60 h-14 rounded-lg bg-blue-400 text-lg'> Price: 4500
                </button>
                <p className='text-3xl font-bold my-5'>Facilities : </p>
                <ul className='flex text-xl justify-between'>
                    <li>Swimming Pool</li>
                    <li>Dogs</li>
                    <li>Garden</li>
                    <li>Laundry</li>
                    <li>Cricket</li>
                </ul>
                <button className='w-60 h-14 rounded-lg bg-red-400 my-5 text-lg'> Book Now
                </button>
            </div>
        </div>
    )
}

export default SingleHotel
