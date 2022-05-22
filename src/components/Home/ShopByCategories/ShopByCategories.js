import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Category from './Category';

const ShopByCategories = () => {

    const {data: categories, isLoading} = useQuery('caragories', () => fetch('http://localhost:5000/category').then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-5xl text-center font-bold my-4'>Shop by Categories</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-12'>

            {
                categories.map(category => <Category
                key={category._id}
                category={category}
                ></Category>)
            }

            </div>
        </div>
    );
};

export default ShopByCategories;