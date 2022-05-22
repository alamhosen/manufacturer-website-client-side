import React from 'react';

const Category = ({ category }) => {
    const { name, img } = category;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100">
                <figure class="px-10 pt-10">
                    <img src={img} alt="" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <div class="card-actions">
                        <button class="btn btn-outline btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;