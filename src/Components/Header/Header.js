import React from 'react'
import Navigation from '../Navigation'
import '../../CSS/layout/header.scss'

const Header = () => {
  return (
		<header>
            <div className="Logo">
                <div className="Wrapper">
                    <img src="./img/teams/jpn.png" alt="Brave Blossoms Logo" />
                    <h4>Brave Blossoms Portal</h4>
                </div>
            </div>
        </header>
  );
}

export default Header
