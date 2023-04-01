import React, {useState, useEffect, useRef} from "react";
import Navigation from "../Navigation/Navigation";
import Welcome from "./Welcome/Welcome";
import Teams from "./Teams/Teams";
import Rules from "./Rules/Rules";
import {scrollToEl, changeActive} from '../../utils'
import {ErrorBoundary} from 'react-error-boundary'

//Error boundary to appear when something goes wrong
function MainErrorFallbackComponent({error}) {
	return (
	  <div role="alert">
		<p>Something went wrong with the Main page:</p>
		<pre>{error.message}</pre><br/>
		<p>Please try reloading this page. If the issue persists, please contact <a href="mailto: support@bravebrossom.test.com">Brave Brossom Support Team</a>.</p>
	  </div>
	)
  }

const Main = (props) => {
	const mainNav = ['Welcome', 'Teams', 'Learn Rugby'];
	const navId = "SecondNav"
	// Saves previously selected navigation item
	const prevStatus = useRef(null)
	// Saves  selected navigation item
	const [selectedNav, setselectedNav] = useState('Welcome');
	//Callback function to set the selectedNav status
	const selectnav = (event) => {
		scrollToEl(event, setselectedNav);
	};
	//Change active item when the selectedNav status changes
	useEffect(()=>{
		if(prevStatus.current && prevStatus.current !== selectedNav){
			changeActive(selectedNav, navId);
		}
		prevStatus.current = selectedNav;
	},[selectedNav]);

	//Render navigation bar and selected component ("Welcome", "Teams" and "Learn Rugby")
    return (
		<main id="Home">
			<div className="Wrapper">
				<ErrorBoundary 
					FallbackComponent={MainErrorFallbackComponent}
					onError={(error, errorInfo) => console.error({ error, errorInfo })}>
					<Navigation 
						navItems={mainNav}
						navId= {navId}
						selectNav={selectnav}
						default={selectedNav} 
					/>
					<Welcome />
					<Teams />
					<Rules />
				</ErrorBoundary>
			</div>
		</main>
    );
};

export default Main;