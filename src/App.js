import React, {useEffect, useState, useRef} from 'react';
import Header from "./Components/Header/Header";
import Navigation from './Components/Navigation/Navigation';
import Main from "./Components/Main/Main";
import Matches from "./Components/AsideMatches/Matches";
import Contact from "./Components/AsideContact/Contact";
import Footer from "./Components/Footer/Footer";
import {selectEl, changeActive} from './utils'
import {ErrorBoundary} from 'react-error-boundary'

//Error boundary when something goes wrong
function GeneralErrorFallbackComponent({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre><br/>
      <p>Please try reloading this page. If the issue persists, please contact <a href="mailto: support@bravebrossom.test.com">Brave Brossom Support Team</a>.</p>
    </div>
  )
}

function App() {
	const navItems = ["Matches", "Home", "Contact"];
	const navId = "TopNav"
	// Saves previous selected navigation item
	let prevStatus = useRef(null);
	// Saves selected navigation item
	const [selectednav, setselectednav] = useState('Home');
	// Callback function to set selected navigation item
	const selectNav = (event) => {
		selectEl(event, setselectednav, 'Home');
	};

	//When selected navigation item changes 
	useEffect(()=>{
		if(prevStatus.current && prevStatus.current !== selectednav){
			changeActive(selectednav, navId);
		}
		prevStatus.current = selectednav;
	},[selectednav]);

	//Render navigation bar and selected component ("Home", "Matches" and "Contact")
  return (
		<div className="App">
			<ErrorBoundary 
				FallbackComponent={GeneralErrorFallbackComponent}
				onError={(error, errorInfo) => console.error({ error, errorInfo })}>
				<Header/>
				<div className="Wrapper">
					<Navigation 
						selectNav={selectNav}
						navItems={navItems}
						navId={navId}
						default={selectednav}
					/>
				</div>
				{selectednav === 'Home' && <Main/>}
				{selectednav === 'Matches' && <Matches/>}
				{selectednav === 'Contact' && <Contact/>}
				<Footer selectMainComponent={setselectednav} />
			</ErrorBoundary>
		</div>
  );
}

export default App;