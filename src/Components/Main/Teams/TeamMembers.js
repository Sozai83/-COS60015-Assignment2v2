import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import memberData from "./TeamsData";
import Slider from "react-slick";
import {ErrorBoundary} from 'react-error-boundary'

//Error boundary when something goes wrong with this section
function TeamMemberCardFallbackComponent({error}) {
  return (
    <div role="alert">
      <p>Something went wrong when retrieving team member's cards:</p>
      <pre>{error.message}</pre><br/>
      <p>Please try reloading this page. If the issue persists, please contact <a href="mailto: support@bravebrossom.test.com">Brave Brossom Support Team</a>.</p>
    </div>
  )
}

const TeamMembers = ({openMemberDetails, ...props}) => {
    // setting for carousel - react-slick
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            }
          }
        ]
    };

    // Pulls member data from memberData file
    const grabMemberDetails = (event)=>{
        event.preventDefault();
        openMemberDetails(event.target.closest('figure').dataset.member);
    }
    // Map the array contains member IDs to array of member card JSX
    const createMembersBlocks = (ids) => ids.map( id =>  {
        const member = memberData[id];
            return(
            <figure className="TeamMember" data-member={member.id} onClick={grabMemberDetails} key={id}>
                <img src={`./img/members/${member.id}.jpg`} alt={`Portorate of ${member.name}`}/>
                <figcaption>
                    <b>{member.name}</b><br/>
                    {member.position}
                </figcaption>
            </figure>)
    })
    const members = ['fw1', 'fw2', 'fw3', 'fw4', 'fw5', 'fw6','fw7','fw8', 'fw9', 'fw10', 'fw11', 'fw12','fw13', 'fw14', 'fw15', 'fw16', 'fw17', 'fw18','fw19', 'fw20', 'fw21', 'bk1', 'bk2', 'bk3','bk4', 'bk5', 'bk6', 'bk7', 'bk8', 'bk9', 'bk10','bk11']
    const membersBlocks = createMembersBlocks(members);

    //Returns team member carousel
  return (
    <ErrorBoundary 
        FallbackComponent={TeamMemberCardFallbackComponent}
        onError={(error, errorInfo) => console.error({ error, errorInfo })}
        onReset={() => {
        // reset the state of your app
        }}
    >
    <div>
        <h3>Team Members</h3>
        <div id="TeamMembersWrapper">
            <div id="TeamMembers">
                <Slider {...settings}>
                    {membersBlocks}
                </Slider>
            </div>
            <i className="Credit">Photos from <a href="http://en.rugby-japan.jp/japan/">Japan rugby</a></i>
        </div>
    </div>
    </ErrorBoundary>
    );
};

export default TeamMembers;