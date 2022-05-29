import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import CancelOrderConfirmation from './CancelOrderConfirmation';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    // const [orders, setOrders] = useState([]);
    const[calcleOrder, setCancelOrder] = useState(null);
    const navigate = useNavigate();

    const {data: orders, isLoading, refetch} = useQuery('orders', () =>fetch(`http://localhost:5000/order?email=${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken')
                navigate('/')
            }
            return res.json()
        }) )

        if(isLoading){
            return <Loading></Loading>
        }

    return (
        <div>
            <h2 className='text-2xl text-center my-3'>Your Total Order: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td>${order.totalPrice}</td>
                                    <td>
                                        {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success text-white'>Pay</button></Link>}

                                        {(order.totalPrice && order.paid) && <div className='text-success font-bold'>
                                            <p><span>Paid</span></p>
                                            <p>Transaction Id: <span className='text-orange-500'>{order.transactionId}</span></p>
                                        </div>}
                                        {(order.totalPrice && !order.paid) && 
                                         <label onClick={() => setCancelOrder(order)} htmlFor="cancel-order-confirmation" className="btn btn-xs btn-error text-white mx-2">Cancel</label>                                        
                                      }
                                    </td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
            {
                calcleOrder && <CancelOrderConfirmation
                calcleOrder={calcleOrder}
                setCancelOrder={setCancelOrder}
                refetch={refetch}
                ></CancelOrderConfirmation>
            }
        </div>
    );
};

export default MyOrders;