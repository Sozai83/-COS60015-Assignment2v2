import React from "react";

const AboutTeams = () => {
  return (
    <div>
        <h2>Teams</h2>
        <figure className="TeamsTop">
        <img src={'./img/rugby_teams.jpg'} alt="teams introduction"/>
        <i className="Credit">Photo by <a href="https://unsplash.com/@designer4u?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olga Guryanova</a> on <a href="https://unsplash.com/photos/ft7vJxwl2RY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></i>
        </figure>
        <article className="About">
            <h3>About the team</h3>
            <p>
                The Brave Blossoms was named after the emblematic flower of Japan, the cherry blossom.<br/>
                The team's nickname reflects their fighting spirit, resilience, and determination to overcome challenges, just like the brave cherry blossoms that bloom in adversity.<br/>
            </p>
            <p>
                The Brave Blossoms have been performing exceptionally well in recent years, making significant progress in the world of rugby.<br/>
                One of the most significant moments in the team's history was during the 2015 Rugby World Cup, where they reached the quarterfinals for the first time and won three out of four matches in the group stages.<br/>
                This achievement was followed by their successful performance in the 2019 Rugby World Cup, where they won all their group matches, including a historic victory against Ireland, and made it to the quarterfinals.
            </p>
        </article>                                                    
    </div>
    );
};

export default AboutTeams;
