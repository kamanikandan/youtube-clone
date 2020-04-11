import React from 'react';

const Footer = () => {
    return (
        <div className='container'>
            <h5 className="footer">&copy; {(new Date().getFullYear())} Devloped with Google API</h5>
        </div>
    );
};

export default Footer;