import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);

    const { data: orders, isLoading } = useQuery('orders', () => fetch(`http://localhost:5000/order/${user.email}`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl text-center my-3'>Your Total Order: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>${order.totalPrice}</td>
                                    <td>
                                    {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success text-white'>Pay</button></Link>}

                                    {(order.totalPrice && !order.paid) && <span className='text-success'>Paid</span>}
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;