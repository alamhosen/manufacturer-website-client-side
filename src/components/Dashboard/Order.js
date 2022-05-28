import React from 'react';

const Order = ({order, index}) => {
    const {productName, quantity, totalPrice, customerName, address} = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>${totalPrice}</td>
            <td>{customerName}</td> 
        </tr>
    );
};

export default Order;