import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{background:`url(https://i.ibb.co/Jvnbx6Q/SrZOgG.jpg)`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to CarParts Plus</h1>
                        <p className="mb-5 lg:max-w-lg text-2xl">Find the right parts faster on over 88,000+ replacement parts and accessories. Best deals on top sellers.</p>
                        <button className="btn btn-primary">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;