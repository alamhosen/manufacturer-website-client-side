import React from 'react';

const CarParts = ({part}) => {
    const {name, img, minqty, available, price, description} = part;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure className="px-10 pt-10"><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>

                    <div className=''>
                    <h3 className='card-title'>Minimum Order Quantity: {minqty} </h3>
                    <h3 className='card-title'>Available Quantity: {available} </h3>
                    <h3 className='card-title'>Price: ${price} </h3>
                    </div>

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarParts;