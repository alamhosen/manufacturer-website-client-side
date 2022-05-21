import React from 'react';

const CarParts = ({part}) => {
    const {name, img, minqty, available, price, description} = part;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10"><img src={img} alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className=''>
                    <h3 className='card-title'>Minimum Order Quantity: {minqty} </h3>
                    <h3 className='card-title'>Available Quantity: {available} </h3>
                    <h3 className='card-title'>Price: ${price} </h3>
                    </div>

                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarParts;