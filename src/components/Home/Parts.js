import React, { useEffect, useState } from 'react';
import CarParts from './CarParts';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='my-2'>
            <h2 className='text-3xl text-center font-bold my-5'>Featured Parts</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5'>
                {
                    parts.slice(0, 6).map(part => <CarParts
                        key={part._id}
                        part={part}
                    ></CarParts>)
                }
            </div>

        </div>
    );
};

export default Parts;