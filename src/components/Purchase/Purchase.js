import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { _id, name, minqty, available, price } = product;

    let disablebtn = false;
    const [quantity, setQuantity] = useState();

    if(quantity <minqty || quantity >available){
        toast.error(`Minimm order quantity ${minqty} and maximum order quantity ${available}`)
        disablebtn= true;
    }

    useEffect(() => {
        fetch(`https://protected-lowlands-58562.herokuapp.com/parts/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);

    const handlesubmit = (event) => {
        event.preventDefault()
        const productName = event.target.productName?.value;
        const quantity = event.target.quantity?.value;
        const customerName = event.target.name?.value;
        const email = event.target.email?.value;
        const phone = event.target.phone?.value;
        const address = event.target.address?.value;
        const totalPrice = quantity * price;

        const order = {
            productId: _id,
            productName,
            quantity,
            totalPrice,
            customerName,
            email,
            phone,
            address
        }

        fetch('https://protected-lowlands-58562.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Successfull placed order')
                    event.target.reset();
                }
                else {
                    toast.error('Faild to place order')
                }
                console.log(data);
            })


    }

    return (
        <div className='mx-12'>
            <h2 className='text-3xl text-center font-bold'>Purchase Now</h2>
            <h3 className='text-2xl text-center mt-4'>Available Quantity: {available}</h3>
            <h3 className='text-2xl text-center'>Minimum Order Quantity: {minqty}</h3>
            <h3 className='text-2xl text-center'>Price per Pcs: ${price}</h3>

            <div>
                <form onSubmit={handlesubmit} className='flex justify-center my-8'>
                    <div className="form-control w-full max-w-lg">
                        <input type="text" name='productName' disabled value={name || ''} className="input input-bordered w-full" />

                        <input type="number" name='quantity'
                        onBlur={event => setQuantity(event.target.value)}
                            placeholder="Enter Quantity" className="input input-bordered w-full my-3" required />

                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full my-3" />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full" />
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full my-3" />
                        <textarea name="address" id="" cols="30" rows="10" placeholder='Enter your shipping address' className="input input-bordered w-full" required></textarea>
                        <button
                            disabled={disablebtn}
                            className="btn btn-primary mt-3">Place Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Purchase;