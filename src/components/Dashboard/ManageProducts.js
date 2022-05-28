import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Product from './Product';

const ManageProducts = () => {
    const { data: parts, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/parts', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-center mb-4'>Manage All Products: {parts.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Available</th>
                            <th>Price </th>
                            <th>Edit item </th>
                            <th>Delete item </th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           parts.map((part, index) => <Product
                           key={part._id}
                           part={part}
                           index={index}
                           ></Product>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;