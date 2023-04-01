import React from "react";

const Footer = ({selectMainComponent}) => {
  //select body element
  const body = document.querySelector("body");
  //call back function to move to the selected section
    const moveTo = (event)=>{
      //only action when the selected item is list items
      if (event.target.tagName === "LI"){
        //get selected item
        let selected = event.target.dataset.nav.split('-');
        //get selected main menu - Home, Matches, Contact
        let topNav = selected[0];
        //get selected position - Top, Welcome, Teams, LearnRugby
        let position = selected[1];

        //Changes the main positoin to the topNav(Home, Matches, Contact)
        selectMainComponent(topNav);

        //if the position is Top, moves up to top
        if(position === 'Top'){
            body.scrollIntoView();
        }else{
          //if something else, scroll to the selected element
          try{
            const selectedEl = document.getElementById(position);
            selectedEl.scrollIntoView();
          }catch{
            //If it fails, try again after a second
            setTimeout(()=>{
              const selectedEl2 = document.getElementById(position);
              selectedEl2.scrollIntoView();
            },1000)
          }
        }
      }
    }
    //Returns footer menu
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
