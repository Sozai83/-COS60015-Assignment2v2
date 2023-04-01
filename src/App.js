import React, {useEffect, useState, useRef} from 'react';
import Header from "./Components/Header/Header";
import Navigation from './Components/Navigation/Navigation';
import Main from "./Components/Main/Main";
import Matches from "./Components/AsideMatches/Matches";
import Contact from "./Components/AsideContact/Contact";
import Footer from "./Components/Footer/Footer";
import {selectEl, changeActive} from './utils'
import {ErrorBoundary} from 'react-error-boundary'

function GeneralErrorFallbackComponent({error, resetErrorBoundary}) {
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
	let prevStatus = useRef(null);
	const [selectedComponent, setSelectedComponent] = useState('Home');
	const selectNav = (event) => {
		selectEl(event, setSelectedComponent, 'Home');
	};

	useEffect(()=>{
		if(prevStatus.current && prevStatus.current !== selectedComponent){
			changeActive(selectedComponent, navId);
		}
		prevStatus.current = selectedComponent;
	},[selectedComponent]);

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
						default={selectedComponent}
					/>
				</div>
				{selectedComponent === 'Home' && <Main/>}
				{selectedComponent === 'Matches' && <Matches/>}
				{selectedComponent === 'Contact' && <Contact/>}
				<Footer selectMainComponent={setSelectedComponent} />
			</ErrorBoundary>
		</div>
  );
}

export default App;