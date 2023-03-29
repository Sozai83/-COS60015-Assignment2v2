import React from "react";

const Footer = () => {
    return (
    <div id="FooterContact">
        <p>Contact:</p>
        <address>Address: xxx xxxx xxxxx Tokyo, Japan</address>
        <email>Email: <a href="mailto:fake.email@braveblossom.com">fake.email@braveblossom.com</a></email>
        <p>Phone: <a href="tel:123-456-789" className="phone">123-456-789</a></p>
        <a href="privacypolicy.html" target="_blank">Privacy Policy</a>
        <p>Copyright © Shiori Chiku. All rights reserved</p>
    </div>
    );
};

export default Footer;