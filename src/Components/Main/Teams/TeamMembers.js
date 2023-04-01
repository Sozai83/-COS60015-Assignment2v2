import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMemberCards from "./TeamMemberCard";
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
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
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
                <Slider {...settings}>
                    <TeamMemberCards 
                        ids={['fw1', 'fw2', 'fw3', 'fw4', 'fw5', 'fw6']}
                        openMemberDetails={openMemberDetails}
                    />
                    <TeamMemberCards 
                        ids={['fw7','fw8', 'fw9', 'fw10', 'fw11', 'fw12']}
                        openMemberDetails={openMemberDetails}
                    />
                    <TeamMemberCards 
                        ids={['fw13', 'fw14', 'fw15', 'fw16', 'fw17', 'fw18']}
                        openMemberDetails={openMemberDetails}
                    />
                    <TeamMemberCards 
                        ids={['fw19', 'fw20', 'fw21', 'bk1', 'bk2', 'bk3']}
                        openMemberDetails={openMemberDetails}
                    />
                    <TeamMemberCards 
                        ids={['bk4', 'bk5', 'bk6', 'bk7', 'bk8', 'bk9']}
                        openMemberDetails={openMemberDetails}
                    />
                    <TeamMemberCards 
                        ids={['bk10','bk11']}
                        openMemberDetails={openMemberDetails}
                    />
                </Slider>
            <i className="Credit">Photos from <a href="http://en.rugby-japan.jp/japan/">Japan rugby</a></i>
        </div>
    </div>
    </ErrorBoundary>
    );
};

export default TeamMembers;