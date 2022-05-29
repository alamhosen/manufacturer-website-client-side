import React from 'react';

const Category = ({ category }) => {
    const { name, img } = category;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;