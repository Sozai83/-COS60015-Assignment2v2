import React from 'react';
import WelcomePhotoCredential from './WelcomePhotoCredential'
import '../../../CSS/layout/welcome.scss'

const Welcome = () => {
 
  return (
    <React.Fragment>
      <section id="Welcome">
        <h1>Welcome to the Brave Blossoms Portal!</h1>
        <article>
          <h4>We are the "Brave Blossoms", the Japan men's national rugby team.</h4>
          <p>
            On this webpage, you can stay up-to-date with the latest news and information about the Brave Blossoms, including upcoming matches, player profiles, team statistics, and more.<br/>
            You can also learn about the rugby, and discover what makes the Brave Blossoms such a unique and beloved team.<br/>
            Whether you're a die-hard rugby fan or simply curious about the sport, we invite you to join us in supporting the Brave Blossoms on their journey to greatness.
          </p>
        </article>
      </section>
      <WelcomePhotoCredential />
    </React.Fragment>
  );
};

export default Welcome;