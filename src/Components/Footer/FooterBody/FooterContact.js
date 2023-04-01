import React from "react";

const Footer = () => {
    //Returns footer contact details
    return (
    <div id="FooterContact">
        <p>Contact:</p>
        <address>Address: xxx xxxx xxxxx Tokyo, Japan</address>
        <p>Email: <a href="mailto:fake.email@braveblossom.com">fake.email@braveblossom.com</a></p>
        <p>Phone: <a href="tel:123-456-789" className="phone">123-456-789</a></p>
        <a href="privacypolicy.html" target="Blank">Privacy Policy</a>
        <p>Copyright © Shiori Chiku. All rights reserved</p>
    </div>
    );
};

export default Footer;