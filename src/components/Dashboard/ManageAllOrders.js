import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Order from './Order';

const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('http://localhost:5000/order', {
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
            <h2 className='text-2xl text-center mb-4'>Manage All Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Total Quantity</th>
                            <th>Total Price</th>
                            <th>Customer Name </th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map((order, index) => <Order
                        key={order._id}
                        order={order}
                        index={index}
                        ></Order> )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;