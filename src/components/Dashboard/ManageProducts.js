import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import Product from './Product';

const ManageProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

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

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Available</th>
                            <th>Price </th>
                            <th>Edit item </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           parts.map((part, index) => <Product
                           key={part._id}
                           part={part}
                           index={index}
                           setDeletingProduct={setDeletingProduct}
                           ></Product>)
                       }
                    </tbody>
                </table>
            </div>
            {
               deletingProduct && <DeleteConfirmModal
               deletingProduct={deletingProduct}
               setDeletingProduct={setDeletingProduct}
               refetch={refetch}
               ></DeleteConfirmModal> 
            }
        </div>
    );
};

export default ManageProducts;