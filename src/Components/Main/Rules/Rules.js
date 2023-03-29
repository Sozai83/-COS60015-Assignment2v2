import React, {useState, useEffect, useRef} from "react";
import Navigation from "../../Navigation";
import RuleInfo from "./RuleInfo";
import {selectEl, changeActive} from '../../../utils'
import '../../../CSS/layout/learn-rugby.scss'

const Main = () => {
    const ruleNavItems =  ["Beginner Rules", "Advance Rules", "Recent Changes"];
    const navId = "RulesNav"
    let prevStatus = useRef(null);
    const [selectedComponent, setSelectedComponent] = useState('BeginnerRules');
    const selectNav = (event) => {
      selectEl(event, setSelectedComponent, 'BeginnerRules');
    };

    useEffect(()=>{
      if(prevStatus.current && prevStatus.current !== selectedComponent){
        changeActive(selectedComponent, navId);
      }
      prevStatus.current = selectedComponent;
    },[selectedComponent]);
  
    return (
		<section id="LearnRugby">
				<Navigation 
          navItems={ruleNavItems}
          navId={navId}
          selectNav={selectNav}
          default={selectedComponent} 
        />
        <RuleInfo selected={selectedComponent} />
		</section>
    );
};

export default Main;