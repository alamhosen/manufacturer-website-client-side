import React from 'react';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{background:`url(https://i.ibb.co/Jvnbx6Q/SrZOgG.jpg)`}}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="">
                        <h1 class="mb-5 text-5xl font-bold">Welcome to CarParts Plus</h1>
                        <p class="mb-5 lg:max-w-lg text-2xl">Find the right parts faster on over 88,000+ replacement parts and accessories. Best deals on top sellers.</p>
                        <button class="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;