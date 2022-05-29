import React, { useState } from 'react';

const Order = ({order, index}) => {
    const [shippedStatus, setShippedStatus] = useState('Pending')

    const {productName, quantity, totalPrice, customerName, address} = order;

    const handleShippedStatus = () =>{
        setShippedStatus('Shipped')
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>${totalPrice}</td>
            <td>{customerName}</td> 
            <td>
            {order?.paid && <button onClick={handleShippedStatus} className='btn btn-xs btn-success text-white'>{shippedStatus}</button>} 
            {!order?.paid && <button className='btn btn-xs btn-warning text-white'>Unpaid</button>} 
            </td> 
        </tr>
    );
};

export default Order;