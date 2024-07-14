import React from 'react';
import './Gallery.css';

const Gallery = () => {
    const component = [];
    const nComponents = 2;
    for (let i = 0; i < nComponents; i++) {
        const revert = "revert";
        if (i % 2 !== 0) {
            component.push(
                <div className={revert + " gallery"}>
                    <div className="left">
                        <div className="lImg">
                            <img src="https://cdn.theatlantic.com/thumbor/OJ74WJrkshFZzT9Om--_rjd75dU=/46x0:603x557/540x540/media/img/mt/2014/01/shirleytemple/original.jpg" alt="" /></div>
                        <div className="lImg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_UNEsh-MeYm2842ynKjzsc9sIRIA0NAmtiQ&s" alt="" /></div>
                        <div className="lImg">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Wikipedia_Logo_as_ASCII_Art.png" alt="" /></div>
                        <div className="lImg">
                            <img src="https://as2.ftcdn.net/v2/jpg/05/08/42/81/1000_F_508428143_ve8ylyiFZOmKEAfFg3iCYnOyPaRCiPYh.jpg" alt="" /></div>
                    </div>
                    <div className="right">
                        <div className="rImg">
                            <img src="https://as1.ftcdn.net/v2/jpg/05/08/45/62/1000_F_508456285_jLLIrcyzkI8TuwZr407JmN5ZiKDH5z8b.jpg" alt="" /></div>
                    </div>
                </div>

            );
        }else{
            component.push(
                <div className="gallery">
                    <div className="left">
                        <div className="lImg">
                            <img src="https://scipython.com/static/media/uploads/blog/ascii-art/saturn-ascii-i.png" alt="" /></div>
                        <div className="lImg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gN2_zgsQpY9jqH2ZDMyc_NoUdjPIOutlBQ&s" alt="" /></div>
                        <div className="lImg">
                            <img src="https://as2.ftcdn.net/v2/jpg/05/08/42/81/1000_F_508428143_ve8ylyiFZOmKEAfFg3iCYnOyPaRCiPYh.jpg" alt="" /></div>
                        <div className="lImg">
                            <img src="https://framerusercontent.com/images/U6mibmQ3boAPGmzzhMWyRsHp4.png" alt="" /></div>
                    </div>
                    <div className="right">
                        <div className="rImg">
                            <img src="https://as1.ftcdn.net/v2/jpg/05/08/45/62/1000_F_508456285_jLLIrcyzkI8TuwZr407JmN5ZiKDH5z8b.jpg" alt="" /></div>
                    </div>
                </div>

            );
        }

    }

    return <>{component}</>;
};

export default Gallery;
