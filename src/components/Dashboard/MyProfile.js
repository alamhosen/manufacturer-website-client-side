import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    const onClick = (event) => {
        event.preventDefault()
        navigate('/updateprofile')
    }

    const { data: profile, isLoading } = useQuery('profile', () => fetch(`http://localhost:5000/profile/${user.email}`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="hero">
                <div class="hero-content flex-col w-3/5 ">
                    <div class="text-center lg:text-left">
                        <h2 className='font-bold text-center'>Name: {user.displayName}</h2>
                        <p className='text-center'>Email: {user.email}</p>
                        {
                            profile.map(p =>

                                <div
                                    key={p._id}
                                >
                                    <figure class="px-10 pt-10">
                                        <img style={{ width: '150px' }} src={p?.img} alt="Profile img" class="rounded-xl" />
                                    </figure>

                                    <div class="card-body">
                                        <div className='text-2xl'>
                                            <p>Education: {p.education}</p>
                                            <p>Address: {p.address}</p>
                                            <p>City: {p.city}</p>
                                            <p>Phone Number: {p.phone}</p>
                                            <p>Linkedin Profile: {p.linkedin}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        <button onClick={onClick} class="btn btn-outline btn-primary">Update Profile</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;