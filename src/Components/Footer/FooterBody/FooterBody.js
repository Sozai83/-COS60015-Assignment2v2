import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";

const Footer = ({selectMainComponent}) => {
    return (
		<section id="Footer">
      <div className="Wrapper">
        <FooterMenu selectMainComponent={selectMainComponent}/>
        <FooterContact />
      </div>
		</section>
    );
};

export default Footer;
