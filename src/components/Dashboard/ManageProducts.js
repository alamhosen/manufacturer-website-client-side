import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

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
        </div>
    );
};

export default ManageProducts;