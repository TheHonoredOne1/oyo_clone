import React from 'react'
import Image from 'next/image'
const Block = ({title , para}) => {
    return (
        <div className='border-r border-gray-300 w-60 h-full flex items-center px-3 '>
            <Image src={'/demo.svg'} 
            alt='demo' 
            width = {200} 
            height = {200} 
            className='h-10 w-10 rounded-full mr-5'
            />
            <div>
                <h3 className='font-bold'>{title}</h3>
                <p className='text-gray-400 text-xs line-clamp-1'>{para}</p>
            </div>
        </div>
    )
}

export default Block
