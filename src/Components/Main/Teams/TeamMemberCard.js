import React from "react";
import memberData from "./TeamsData";

const TeamMemberCards = ({ids,openMemberDetails}) => {
    // Pulls member data from memberData file
    const grabMemberDetails = (event)=>{
        event.preventDefault();
        openMemberDetails(event.target.closest('figure').dataset.member);
    }
    // Map the array contains member IDs to array of member card JSX
    const members = ids.map( id =>  {
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
    
    //Returns team member cards in a div
    return (
        <div id="TeamMembers">
            {members}
        </div>
      );
  };
  
  export default TeamMemberCards;
  