import { space } from 'postcss/lib/list'
import React from 'react'

const Header2 = () => {

    const List = [
        {
            name: "Bangalore",
        },
        {
            name: "Calcutta",
        },
        {
            name: "Mumbai",
        },
        {
            name: "Delhi",
        },
        {
            name: "Hyderabad",
        }
    ]
    return (
        <div className='flex px-8 bg-gray-100 justify-between '>
            {
                List.map((element, index) => {
                    return (
                        <span key = {index}>{element.name}</span>
                    )
                })
            }
        </div>
    )
}

export default Header2
