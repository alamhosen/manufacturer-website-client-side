import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import PartsByMake from './PartsByMake';
import Reviews from './Reviews';
import ShopByCategories from './ShopByCategories';
import Summaries from './Summaries';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summaries></Summaries>
            <Reviews></Reviews>
            <ShopByCategories></ShopByCategories>
            <PartsByMake></PartsByMake>
        </div>
    );
};

export default Home;