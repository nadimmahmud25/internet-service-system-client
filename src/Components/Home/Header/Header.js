import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="header-bg" style={{ backgroundColor: '#62fb7b' }}>
            <Navbar />
            <HeaderMain />
        </div>
    );
};

export default Header;