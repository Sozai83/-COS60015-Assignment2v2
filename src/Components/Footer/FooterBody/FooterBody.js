import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";

const Footer = ({selectMainComponent}) => {
  //Renders footer menu and footer contact details
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
