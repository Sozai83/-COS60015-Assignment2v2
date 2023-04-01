import React, {useState, useEffect, useRef} from "react";
import Navigation from "../../Navigation/Navigation";
import RuleInfo from "./RuleInfo";
import {selectEl, changeActive} from '../../../utils'
import '../../../CSS/layout/learn-rugby.scss'

const Main = () => {
    const ruleNavItems =  ["Beginner Rules", "Advance Rules", "Recent Changes"];
    const navId = "RulesNav"
    // Saves previously selected navigation item
    let prevStatus = useRef(null);
    // Saves selected navigation item
    const [selectedNav, setselectedNav] = useState('BeginnerRules');
    //Callback function to change selected navigatino item
    const selectNav = (event) => {
      selectEl(event, setselectedNav, 'BeginnerRules');
    };
    //Change active navigation item when the SelectedNav status changes
    useEffect(()=>{
      if(prevStatus.current && prevStatus.current !== selectedNav){
        changeActive(selectedNav, navId);
      }
      prevStatus.current = selectedNav;
    },[selectedNav]);
  //Renders Rules navigation and rule information with selected items
    return (
		<section id="LearnRugby">
				<Navigation 
          navItems={ruleNavItems}
          navId={navId}
          selectNav={selectNav}
          default={selectedNav} 
        />
        <RuleInfo selected={selectedNav} />
		</section>
    );
};

export default Main;