import React, {useState, useEffect, useRef} from "react";
import Navigation from "../Navigation/Navigation";
import Welcome from "./Welcome/Welcome";
import Teams from "./Teams/Teams";
import Rules from "./Rules/Rules";
import {scrollToEl, changeActive} from '../../utils'
import {ErrorBoundary} from 'react-error-boundary'

function MainErrorFallbackComponent({error, resetErrorBoundary}) {
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
	const prevStatus = useRef(null)
	const [selectedComponent, setSelectedComponent] = useState('Welcome');
	const selectnav = (event) => {
		scrollToEl(event, setSelectedComponent);
	};
	useEffect(()=>{
		if(prevStatus.current && prevStatus.current !== selectedComponent){
			changeActive(selectedComponent, navId);
		}
		prevStatus.current = selectedComponent;
	},[selectedComponent]);
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
						default={selectedComponent} 
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