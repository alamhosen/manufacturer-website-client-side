import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './ShopByCategories.css'

const ShopByCategories = () => {
    return (
        <div className='my-5'>
            <h2 className='text-5xl text-center font-bold mb-5'>Shop by Categories</h2>
            <div className='categories'>
                <Container className='text-center'>
                    <Row>
                        <Col className='col col-sm-6 col-md-4 col-lg-3'>
                            <a href="#">
                            <img src="https://i.ibb.co/V9t23DS/1.webp" alt="" />
                            <h4>Auto Body Parts and Mirrors</h4>
                            </a>
                        </Col>
                        <Col className='col col-sm-6 col-md-4 col-lg-3'>
                            <a href="http://">
                            <img src="https://i.ibb.co/r5vrQyr/2.jpg" alt="" />
                            <h4>Headlights and Lighting</h4>
                            </a>
                            </Col>
                        <Col className='col col-sm-6 col-md-4 col-lg-3'>
                            <a href="#">
                            <img src="https://i.ibb.co/F8BcnhH/3.jpg" alt="" />
                            <h4>Engine and Drivetrain</h4>
                            </a>
                        </Col>
                        <Col className='col col-sm-6 col-md-4 col-lg-3'>
                            <a href="#">
                            <img src="https://i.ibb.co/SPDt8zF/4.webp" alt="" />
                            <h4>Brakes, Suspension and Steering</h4>
                            </a>
                        </Col>
                        <Col className='col col-sm-6 col-md-4 col-lg-3'>
                           <a href="#">
                           <img src="https://i.ibb.co/T1bkKBz/5.webp" alt="" />
                            <h4>Interior Accessories</h4>
                           </a>
                        </Col>
                        <Col className='col col-sm-6 col-md-4 col-lg-3'>
                            <a href="#">
                            <img src="https://i.ibb.co/SdFJDqk/6.webp" alt="" />
                            <h4>Exterior Accessories</h4>
                            </a>
                        </Col>
                        <Col className='col col-sm-6 col-md-4 col-lg-3'>
                            <a href="#">
                            <img src="https://i.ibb.co/q7cLQVm/7.webp" alt="" />
                            <h4>Wheels</h4>
                            </a>
                        </Col>
                        <Col className='col col-sm-6 col-md-4 col-lg-3'>
                           <a href="#">
                           <img src="https://i.ibb.co/c3Y8ymh/8.jpg" alt="" />
                            <h4>Tools and Garage</h4>
                           </a>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ShopByCategories;