import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import PartsMake from './PartsMake';

const PartsByMake = () => {

    const {data: partsMake, isLoading} = useQuery('partsMake', () => fetch('https://protected-lowlands-58562.herokuapp.com/make').then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-5xl text-center font-bold my-4'>Parts by Make</h2>
            <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mx-12'>

            {
                partsMake.map(make => <PartsMake
                key={make._id}
                make={make}
                ></PartsMake>)
            }

            </div>
        </div>
    );
};

export default PartsByMake;