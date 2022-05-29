import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UpdateProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        const name = user.displayName;
        const email = user.email;
        const profile = {
            name,
            email,
            education: data.education,
            address:data.address,
            city:data.city,
            phone:data.phone,
            linkedin:data.linkedin,
            img:data.img
        }
        fetch(`http://localhost:5000/profile/${email}`, {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(profile)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged ===true){
                toast.success('Successfully updated your info')
                reset()
            }
            else{
                toast.error('Failed to update your info')
            }
            
        }) 

    };
    return (
        <div className='flex justify-center items-center'>
            <div className="card w-2/5 shadow-2xl bg-base-100 my-5">
            <h2 className='text-center text-3xl font-bold mt-4'>Please provide your information</h2>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* Education filed start*/}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Education</span>
                                    </label>
                                    <input
                                        {...register("education", {
                                            required: {
                                                value: true,
                                                message: 'Education is Required'
                                            }
                                        })}
                                        type="text"
                                        placeholder="Education details" className="input input-bordered w-full"
                                    />
                                    <label className="label">
                                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.education.message}</span>}
                                    </label>

                                </div>
                                {/* Address filed */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <textarea
                                        {...register("address", {
                                            required: {
                                                value: true,
                                                message: 'Address is Required'
                                            }
                                        })}
                                        type="text"
                                        placeholder="Address details" className="input input-bordered w-full"
                                    />
                                    <label className="label">
                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                    </label>

                                </div>

                                {/* City */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">City</span>
                                    </label>
                                    <input
                                        {...register("city", {
                                            required: {
                                                value: true,
                                                message: 'City is Required'
                                            }
                                        })}
                                        type="text"
                                        placeholder="City" className="input input-bordered w-full"
                                    />
                                    <label className="label">
                                        {errors.city?.type === 'required' && <span className="label-text-alt text-red-500">{errors.city.message}</span>}
                                    </label>
                                </div>

                                {/* Phone number */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input
                                        {...register("phone", {
                                            
                                        })}
                                        type="text"
                                        placeholder="Phone Number" className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Linkedin profile */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Linkedin profile link</span>
                                    </label>
                                    <input
                                        {...register("linkedin", {
                                        })}
                                        type="text"
                                        placeholder="Linkedin" className="input input-bordered w-full"
                                    />
                                </div>

                                {/* Image url */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text">Your Photo URL</span>
                                    </label>
                                    <input
                                        {...register("img", {
                                           
                                        })}
                                        type="text"
                                        placeholder="Linkedin" className="input input-bordered w-full"
                                    />
                                </div>
                           
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Update Profile</button>
                                </div>
                                <p className='text-center mt-3 text-secondary font-semibold'><Link to='/dashboard/myprofile'>Back to your profile</Link></p>

                            </form>


                        </div>
                    </div>
        </div>
    );
};

export default UpdateProfile;