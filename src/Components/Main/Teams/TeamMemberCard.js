import React from "react";
import memberData from "./TeamsData";

const TeamMemberCards = ({ids,openMemberDetails}) => {
    const grabMemberDetails = (event)=>{
        event.preventDefault();
        openMemberDetails(event.target.closest('figure').dataset.member);
    }
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

    return (
        <div id="TeamMembers">
            {members}
        </div>
      );
  };
  
  export default TeamMemberCards;
  