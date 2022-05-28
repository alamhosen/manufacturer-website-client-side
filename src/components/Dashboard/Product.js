import React from 'react';

const Product = ({ part, index, setDeletingProduct }) => {
    const { _id, name, available, price } = part;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{available}</td>
            <td>${price}</td>
            <td><button className="btn btn-xs">Edit</button></td>
            <td>
                <label onClick={() => setDeletingProduct(part)} htmlFor="delete-comfirm-modal" className="btn btn-error btn-xs"> Delete</label>
            </td>
        </tr>
    );
};

export default Product;