import React, {useState, useEffect, useRef} from "react";
import Navigation from "../Navigation/Navigation";
import MatchInfo from "./MatchInfo";
import {selectEl,changeActive} from '../../utils'
import '../../CSS/layout/matches.scss'
import {ErrorBoundary} from 'react-error-boundary'

//Error boundary for this component when anything goes wrong
function MatchesErrorFallbackComponent({error}) {
	return (
	  <div role="alert">
		<p>Something went wrong with the Matches page:</p>
		<pre>{error.message}</pre><br/>
		<p>Please try reloading this page. If the issue persists, please contact <a href="mailto: support@bravebrossom.test.com">Brave Brossom Support Team</a>.</p>
	  </div>
	)
  }

const AsideMatches = (props) => {
	const ruleNavItems = ["2023", "2022", "2021"];
	const navId = "MatchNav"
	//Saves previously selected nav item
    let prevStatus = useRef(null);
	//Saves selected nav item
	const [selectedNav, setSelectedNav] = useState('2023');
	//Callback function to set selected nav item
	const selectNav = (event) => {
		selectEl(event, setSelectedNav, '2023');
	};
	//Changes active nav item when the selected nav item changes
	useEffect(()=>{
		if(prevStatus.current && prevStatus.current !== selectedNav){
			changeActive(selectedNav, navId);
		}
		prevStatus.current = selectedNav;
	},[selectedNav]);
	//Return Navigtation for the matches and selected matches information
    return (
		<aside id="Matches">
            <div className="Wrapper">
				<ErrorBoundary 
					FallbackComponent={MatchesErrorFallbackComponent}
					onError={(error, errorInfo) => console.error({ error, errorInfo })}>
					<Navigation
						navItems={ruleNavItems}
						navId={navId}
						selectNav={selectNav} 
						default={selectedNav}/>
					<MatchInfo selected={selectedNav}/>
				</ErrorBoundary>
			</div>
		</aside>
    );
};

export default AsideMatches;