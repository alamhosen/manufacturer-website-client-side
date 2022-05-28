import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingProduct, setDeletingProduct, refetch}) => {

    const {name, _id} = deletingProduct;

    const handleDelete = () => {
        fetch(`http://localhost:5000/parts/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${name} is deleted`)
                    setDeletingProduct(null)
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-comfirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete "{name}"</h3>
                    <p className="py-4">If you delete this product it will be delete permanently.</p>
                    <div className="modal-action">
                    <button onClick={handleDelete} className="btn btn-error btn-xs">Delete</button>
                        <label htmlFor="delete-comfirm-modal" className="btn btn-xs">Cancle</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;