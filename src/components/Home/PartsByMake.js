import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ShopByCategories.css'

const PartsByMake = () => {
    return (
        <div className='my-5'>
            <h2 className='text-5xl text-center font-bold mb-5'>Shop by Categories</h2>
            <div className='partsByMake'>
                <Container className='text-center'>
                    <Row>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                            <a href="#">
                            <img src="https://i.ibb.co/j8vyZrb/Toyota.jpg" alt="" />
                            <h4>Toyota</h4>
                            </a>
                        </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                            <a href="http://">
                            <img src="https://i.ibb.co/5LJdF8C/Mercedes-Benz.jpg" alt="" />
                            <h4>Mercedes-benz</h4>
                            </a>
                            </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                            <a href="#">
                            <img src="https://i.ibb.co/LNm8kDH/Chevrolet.jpg" alt="" />
                            <h4>Chevrolet</h4>
                            </a>
                        </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                            <a href="#">
                            <img src="https://i.ibb.co/jfjQP0M/Mazda.jpg" alt="" />
                            <h4>Mazda</h4>
                            </a>
                        </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                           <a href="#">
                           <img src="https://i.ibb.co/Hhwbm2n/Mitsubishi.jpg" alt="" />
                            <h4>Mitsubishi </h4>
                           </a>
                        </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                            <a href="#">
                            <img src="https://i.ibb.co/L8CW2jn/Nissan.jpg" alt="" />
                            <h4>Nissan</h4>
                            </a>
                        </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                            <a href="#">
                            <img src="https://i.ibb.co/52Z7hcp/Suzuki.jpg" alt="" />
                            <h4>Suzuki</h4>
                            </a>
                        </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                           <a href="#">
                           <img src="https://i.ibb.co/ypcJBnF/Volkswagen.jpg" alt="" />
                            <h4>Volkswagen</h4>
                           </a>
                        </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                           <a href="#">
                           <img src="https://i.ibb.co/pP2nrYN/BMW.jpg" alt="" />
                            <h4>BMW</h4>
                           </a>
                        </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                           <a href="#">
                           <img src="https://i.ibb.co/DLhs5Js/Ford.jpg" alt="" />
                            <h4>Ford</h4>
                           </a>
                        </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                           <a href="#">
                           <img src="https://i.ibb.co/RC99KvZ/Honda.jpg" alt="" />
                            <h4>Honda</h4>
                           </a>
                        </Col>
                        <Col className='col col-sm-4 col-md-3 col-lg-2'>
                           <a href="#">
                           <img src="https://i.ibb.co/fxsW1jQ/Dodge.jpg" alt="" />
                            <h4>Dodge</h4>
                           </a>
                        </Col>

                    </Row>
                </Container>
    
            </div>
        </div>
    );
};

export default PartsByMake;