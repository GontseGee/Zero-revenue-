import React from "react";
import './header.css';

const header= () => {
    return (
        <header className="header">
            <div className="logo">
                Zero
            </div>
            <div className="menu">
                <div className="hamburger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </header>
    );
};

export default header;