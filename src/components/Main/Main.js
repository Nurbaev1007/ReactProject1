import React from 'react';
import './main.css'

import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'



const Main = () => {
    return (
        <main className='main'>
            <div className="container">
                <section className='main__section'>
                    <div className="main__head">
                        <h1 className='main__title'>Check also</h1>
                        <a className='main__link' target='_blank' href="https://www.apple.com/ru/watch/">See all ></a>
                    </div>
                    <div className="main__row">
                            <div className="main__content">
                                <img className='main__img' src={img1} alt="Airpods"/>
                                <h2 className="main__title">AirPods</h2>
                                <p className="main__price">$199.00</p>
                                <button className="main__btn">Buy</button>
                            </div>

                            <div className="main__content">
                                <img className='main__img' src={img2} alt="Iphone"/>
                                <h2 className="main__title">Iphone XR</h2>
                                <p className="main__price">$799.00</p>
                                <button className="main__btn">Buy</button>
                            </div>

                            <div className="main__content">
                                <img className='main__img' src={img3} alt="tv"/>
                                <h2 className="main__title">Apple TV 4K</h2>
                                <p className="main__price">$179.00</p>
                                <button className="main__btn">Buy</button>
                            </div>

                            <div className="main__content">
                                <img className='main__img' src={img4} alt="card"/>
                                <h2 className="main__title">Apple Card</h2>
                                <p className="main__price">Free*</p>
                                <button className="main__btn">Apply</button>
                            </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Main;