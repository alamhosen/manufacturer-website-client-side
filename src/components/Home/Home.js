import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import Reviews from './Reviews';
import Summaries from './Summaries';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summaries></Summaries>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;