import React from 'react';
import { useNavigate } from 'react-router-dom';

const CarParts = ({part}) => {
    const {_id, name, img, minqty, available, price, description} = part;

    const navigate = useNavigate();

    const handlePurcase = (productId) => {
        navigate(`/purchase/${productId}`)
    }
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
                        <button onClick={() => handlePurcase(_id)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarParts;