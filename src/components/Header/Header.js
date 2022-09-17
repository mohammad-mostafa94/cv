import React from 'react';
import mostafa from '../image/mostafa_pic.png';
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className="pic-name">
                    <div className="pic">
                        <img src={mostafa} alt="" />
                    </div>
                    <div className="nameInfo">
                        <div className="name">
                            <h2>Md.Golam Mostafa</h2>
                            <h5>Software Developer(MERN)</h5>
                        </div>
                    </div>
                </div>
                <div className="linkInfo">
                    <div className="links">
                        <h4>Email:<a href='mailto:gmshakilcse@gmail.com'>gmshakilcse@gmail.com</a></h4>
                        <h4>Location: <a href='#'>Dhaka,Bangladesh.</a></h4>
                        <h4>Mobile:<a href='tel:+8801521320291'>+8801521320291</a></h4>
                    </div>
                </div>
            </div>
            <hr className="marginLine" />
        </>
    );
};

export default Header;