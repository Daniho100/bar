import React from 'react'
import './card.css'

const Card2 = ({menu}) => {
 

    return (
        <div className="container">
            <div className='row'>
  <div className="col " align='center'>

<div className="title">

    <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7">{menu.meal}</p>
    <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7">{menu.topping}</p>

    <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7 ">{menu.quantity}</p>
    <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7 ">{menu.smeal}</p>
    <p className="text-gray-400 fw-bold fs-4 mt-1 mb-7 ">{menu.drinks}</p>

    </div>

</div>
</div>
</div>


    )
}

export default Card2