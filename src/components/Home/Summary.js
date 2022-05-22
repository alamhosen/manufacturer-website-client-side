import React from 'react';

const Summary = ({summary}) => {
    const {img, number, text} = summary;
    return (
        <div className="card lg:max-w-lg bg-base-100">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="text-2xl font-bold">{number}</h2>
                <h2 className="card-title">{text}</h2> 
            </div>
        </div>
    );
};

export default Summary;