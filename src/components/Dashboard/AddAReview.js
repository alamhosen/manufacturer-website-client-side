import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        const name = data.name;
        const img = data.img;
        const description = data.description;
        const rating = data.rating;
        const review = {
            name,
            img,
            description,
            rating        
        }
        console.log(review);

        fetch('http://localhost:5000/review', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.insertedId){
                toast.success('Successfully added your review')
                reset()
            }
            else{
                toast.error('Failed to add review')
            }
        })


    };

    return (
        <div className='flex justify-center items-center mt-5'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl">Add Your Review</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                                type="text"
                                placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
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
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input

                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: 'Rating is Required'
                                    },
                                    minLength: {
                                        value: 1,
                                        message: 'Rating must be 1 star'
                                    },
                                    maxLength:{
                                        value: 5,
                                        message: 'Rating can be maximum 5 star'
                                    }
                                })}

                                type="text"
                                placeholder="Rating" className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.rating?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                                {errors.rating?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                                {errors.rating?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
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
                                placeholder="Your image URL" className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rating.img}</span>}
                            </label>
                        </div>
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Add Review' />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddAReview;