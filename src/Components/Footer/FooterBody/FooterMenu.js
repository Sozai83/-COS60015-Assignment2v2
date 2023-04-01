import React from "react";

const Footer = ({selectMainComponent}) => {
  const body = document.querySelector("body");
    const moveTo = (event)=>{
      if (event.target.tagName === "LI"){
        let selected = event.target.dataset.nav.split('-');
        let topNav = selected[0];
        let position = selected[1];
        selectMainComponent(topNav);
        if(position === 'Top'){
            body.scrollIntoView();       
        }else{
          try{
            const selectedEl = document.getElementById(position);
            selectedEl.scrollIntoView();
          }catch{
            setTimeout(()=>{
              const selectedEl2 = document.getElementById(position);
              selectedEl2.scrollIntoView();
            },1000)
          }
        }
      }
    }

    return (
      <nav id="FooterNav" onClick={moveTo}>
        <div>
          <ul>
            <li data-nav="Home-Top">Home</li>
            <li data-nav="Home-Welcome">Welcome</li>
            <li data-nav="Home-Teams">Team</li>
            <li data-nav="Home-LearnRugby">Learn Rugby</li>
          </ul>
        </div>
        <div>
          <ul>
            <li data-nav="Matches-Top">Matches</li>
          </ul>
        </div>
        <div>
          <ul>
            <li data-nav="Contact-Top">Contact</li>
          </ul>
        </div>
      </nav>
    );
};

export default Footer;
