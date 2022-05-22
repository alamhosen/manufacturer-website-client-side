import React from 'react';
import Summary from './Summary';
import review from '../../images/icon/customer-review.png'
import feedback from '../../images/icon/feedback.png'
import parts from '../../images/icon/parts.png'
import customer from '../../images/icon/customer.png'

const Summaries = () => {
    const summaries = [
        {
            _id: 1,
            img: review,
            number: '2787788+',
            text: 'Reviews',
        },
        {
            _id: 2,
            img: feedback,
            number: '98.85%',
            text: 'Positive Feedback',
        },
        {
            _id: 3,
            img: parts,
            number: '88,000+',
            text: 'Parts',
        },
        {
            _id: 3,
            img: customer,
            number: '10k+',
            text: 'Happy customers',
        }
    ]
    return (
        <div>
            <h2 className='text-5xl text-center my-5 font-bold'>Millions Business Trust Us</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    summaries.map(summary => <Summary
                        key={summary._id}
                        summary={summary}
                    ></Summary>)
                }
            </div>

            <div>
                <div className="text-center bg-base-100 shadow-xl">     
                        <h2 className="text-4xl my-5">Have any question about us?</h2>
                        <button className="btn btn-primary mb-5">Contact us</button>
                </div>
            </div>
        </div>
    );
};

export default Summaries;