import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h2 className='text-2xl text-center font-bold'>Welcome to my Portfolio</h2>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Alam Hosen</h1>
                        <h3 className='text-2xl'>Email: alamhosen.web@gmail.com</h3>
                        <p className="pt-6">Education: BSC honours in physics</p>
                        <p >Institution:Rajshahi College, Rajshahi  </p>

                        <h2 className='text-2xl mt-5'>List of technologies I have as a web developer</h2>
                        <p>HTML, CSS, Bootstrap, Tailwind, Javascript, React </p>

                        <h2 className='mt-6 text-2xl'>My live project link below</h2>
                        <p>https://golden-grocery.web.app/</p>
                        <p>https://photo-galleria-e2186.web.app/</p>
                        <p>https://product-analysis-website-alamhosen.netlify.app/</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;