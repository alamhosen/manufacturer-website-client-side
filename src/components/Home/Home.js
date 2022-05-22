import React from 'react';
import Banner from './Banner';
import Parts from './Parts';
import PartsByMake from '../Home/PartsByMake/PartsByMake';
import Reviews from './Reviews';
import ShopByCategories from './ShopByCategories/ShopByCategories';
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