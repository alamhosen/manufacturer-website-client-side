import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderConfirmation = ({ setCancelOrder, calcleOrder, refetch }) => {
    const { _id, productName } = calcleOrder;

    const handleDelete = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${productName} is deleted`)
                    setCancelOrder(null)
                    refetch()
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="cancel-order-confirmation" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete this order: '{productName}'</h3>
                    <p className="py-4">If you confirm deleting process then this order will be delete permanently.</p>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-error btn-xs">Delete</button>
                        <label htmlFor="cancel-order-confirmation" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderConfirmation;