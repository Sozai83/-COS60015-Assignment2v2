import React, {useState, useEffect, useRef} from "react";
import Navigation from "../Navigation";
import MatchInfo from "./MatchInfo";
import {selectEl,changeActive} from '../../utils'
import '../../CSS/layout/matches.scss'
import {ErrorBoundary} from 'react-error-boundary'

function MatchesErrorFallbackComponent({error, resetErrorBoundary}) {
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
    let prevStatus = useRef(null);
	const [selectedComponent, setSelectedComponent] = useState('2023');
	const selectNav = (event) => {
		selectEl(event, setSelectedComponent, '2023');
	};

	useEffect(()=>{
		if(prevStatus.current && prevStatus.current !== selectedComponent){
			changeActive(selectedComponent, navId);
		}
		prevStatus.current = selectedComponent;
	},[selectedComponent]);
	
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
						default={selectedComponent}/>
					<MatchInfo selected={selectedComponent}/>
				</ErrorBoundary>
			</div>
		</aside>
    );
};

export default AsideMatches;