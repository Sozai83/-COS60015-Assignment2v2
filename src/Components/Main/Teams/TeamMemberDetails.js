import React from "react";
import memberData from "./TeamsData";
import '../../../CSS/layout/team-details.scss'

const TeamMemberDetails = ({toggleDetailStatus, ...props}) => {
  // Pulls member data from memberData file
    const member = memberData[props.member];
    //Convert string with <br> to paragraphs
    const memberBio = member.bio.split('<br>').map(sentence => <p>{sentence}</p>);
    //Callback function to hide team details
    const hideDetails = (event)=>{
        if(event.target.className === 'Overlay' || event.target.className === 'Close'){
            event.preventDefault();
            toggleDetailStatus();
        }       
    }
  //Renders team member details
  return (
    <div className='Overlay' onClick={hideDetails}>
      <section id="TeamDetails">
        <section className="Details">
          <button className="Close">
            &times;
          </button>
          <section className="Bio">
            <figure>
              <img
                src={`./img/members/${member.id}.jpg`}
                alt={`Portorate of ${member.name}`}
              />
            </figure>
            <table>
              <tr>
                <th>Age</th>
                <th>Wight</th>
                <th>Height</th>
                <th>Caps</th>
              </tr>
              <tr>
                <td>{member.age}</td>
                <td>{member.weight}</td>
                <td>{member.height}</td>
                <td>{member.caps}</td>
              </tr>
            </table>
          </section>
          <article>
            <h2>Name: {member.name}</h2>
            <h3>Position: {member.position}</h3>
            <h3>Biography</h3>
            <p>{memberBio}</p>
            <div className="SMS">
                    <a href="https://twitter.com/JRFURugby" alt="Japan Rugby Twitter Account" target="blank">
                        <i className="fa-brands fa-square-twitter"></i>
                    </a>
                    <a href="https://www.instagram.com/japanrugby_jrfu/?hl=en" alt="Japan Rugby instagram Account" target="blank">
                        <i className="fa-brands fa-square-instagram"></i>
                    </a>
                </div>
          </article>
          </section>
            <h3 class="News">News</h3>
            <figure id="News">
                <figure>
                    <img src="./img/news/news1.jpg" alt={member.news1Title}/>
                    <figcaption>
                        <a href={member.news1} target="blank">
                            {member.news1Title}
                        </a>
                    </figcaption>
                </figure>
                <figure>
                    <img src="./img/news/news2.jpg" alt={member.news2Title}/>
                    <figcaption>
                        <a href={member.news2} target="blank">
                            {member.news2Title}
                        </a>
                    </figcaption>
                </figure>
                <figure>
                    <img src="./img/news/news3.jpg" alt={member.news3Title}/>
                    <figcaption>
                        <a href={member.news3} target="blank">
                            {member.news3Title}
                        </a>
                    </figcaption>
                </figure>
                <figure>
                    <img src="./img/news/news4.jpg" alt={member.news4Title}/>
                    <figcaption>
                        <a href={member.news4} target="blank">
                            {member.news4Title}
                        </a>
                    </figcaption>
                </figure>
            </figure>
        </section>
    </div>
  );
};

export default TeamMemberDetails;
