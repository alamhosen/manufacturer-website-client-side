import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        const name = data.name;
        const img = data.img;
        const description = data.description;
        const available = parseInt(data.available);
        const minqty = parseInt(data.minqty);
        const price = parseInt(data.price);

        const parts = {
            name,
            description,
            available,
            minqty,
            price,
            img,      
        }

        fetch('https://protected-lowlands-58562.herokuapp.com/parts', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(parts)
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.insertedId){
                toast.success('Successfully added your product')
                reset()
            }
            else{
                toast.error('Failed to add product')
            }
        })


    };
    return (
        <div className='flex justify-center items-center mt-5'>
            <div className="card w-3/5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl">Add A Product</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Title</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Title is Required'
                                    }
                                })}
                                type="text"
                                placeholder="Product Title " className="input input-bordered w-full"
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>

                            <textarea

                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    },

                                })}  
                                
                                className='input input-bordered input-lg'
            
                                cols="30" rows="10"></textarea>
                           
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                                {errors.description?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}

                            </label>
                        </div>

                        {/* Quantity */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input

                                {...register("available", {
                                    required: {
                                        value: true,
                                        message: 'Quantity is Required'
                                    }                                  
                                })}

                                type="number"
                                placeholder="Quantity" className="input input-bordered w-full"
                            />
                            <label className="label">
                                {errors.available?.type === 'required' && <span className="label-text-alt text-red-500">{errors.available.message}</span>}
                                
                            </label>
                        </div>
                        {/* Minimum order quantity */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Minimum Order Quantity</span>
                            </label>
                            <input

                                {...register("minqty", {
                                    required: {
                                        value: true,
                                        message: 'Minimum Order Quantity is Required'
                                    }                                  
                                })}

                                type="number"
                                placeholder="Minimum Order Quantity" className="input input-bordered w-full"
                            />
                            <label className="label">
                                {errors.minqty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minqty.message}</span>}
                                
                            </label>
                        </div>
                        {/* Price per unite */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price  </span>
                            </label>
                            <input

                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    }                                  
                                })}

                                type="text"
                                placeholder="Price" className="input input-bordered w-full"
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                
                            </label>
                        </div>
                        {/* Product img URL */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input

                                {...register("img", {
                                    required: {
                                        value: true,
                                        message: 'Image is Required'
                                    }
                            
                                })}

                                type="text"
                                placeholder="Your image URL" className="input input-bordered w-full"
                            />
                            <label className="label">
                                {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.img}</span>}
                            </label>
                        </div>
                        <input className='btn btn-primary w-full' type="submit" value='Add Product' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddProduct;