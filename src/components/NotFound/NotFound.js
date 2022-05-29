import React from 'react';
import { useNavigate } from 'react-router-dom';
import funny_404 from '../../images/funny-404.jpg'

const NotFound = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/home')
    }

    return (
        <div className='text-center my-6'>
        <div>
            <h1 className='text-8xl font-bold mb-5'>Oops!</h1>
            <h4 className='text-4xl'>404-PAGE NOT FOUND</h4>
            <p className='text-2xl my-3'>We can't seem to find the page you're looking for.</p>
            <div className='flex items-center justify-center'><img className='w-96' src={funny_404} alt="not found" /></div>
            <button onClick={goHome} className='btn btn-primary mt-2'>GO TO HOMEPAGE</button>
        </div>
    </div>
    );
};

export default NotFound;