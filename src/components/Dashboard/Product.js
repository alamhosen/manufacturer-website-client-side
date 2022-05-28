import React from 'react';

const Product = ({part, index}) => {
    const {name, available, price} = part;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{available}</td>
            <td>${price}</td>
            <td><button class="btn btn-xs">Edit</button></td>
            <td><button class="btn btn-xs">Delete</button></td>
        </tr>
    );
};

export default Product;