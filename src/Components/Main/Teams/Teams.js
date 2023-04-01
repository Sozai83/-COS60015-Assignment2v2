import React, {useState} from "react";
import AboutTeams from './AboutTeams'
import TeamMembers from "./TeamMembers";
import TeamMemberDetails from "./TeamMemberDetails"
import '../../../CSS/layout/teams.scss'
import {ErrorBoundary} from 'react-error-boundary'

//Error boundary when something goes wrong
function TeamMemberCardFallbackComponent({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      <p>Something went wrong when retrieving team member's details:</p>
      <pre>{error.message}</pre>
      <button class="AlertReset" onClick={resetErrorBoundary}>Try again</button>
      <p>If the issue persists, please contact <a href="mailto: support@bravebrossom.test.com">Brave Brossom Support Team</a>.</p>
    </div>
  )
}

const Teams = () => {
//detailStatus stores boolean value. True = shows team details, False = hide team details
  const [detailStatus, setDetailStatus] = useState(false);
  //Callback function to toggle detailStatus value 
  const toggleDetailStatus = () => setDetailStatus((curStatus) => curStatus ? false : true);
  //Stores memeber id selected
  const [member, setMember] = useState('fw1');
  //Callback function to change detailStatus and member
  const openMemberDetails = (newMember)=>{
    toggleDetailStatus();
    setMember(newMember);
  }
 // Renders About teams and Team members carousel
  return (
      <section id="Teams">
            <ErrorBoundary 
              FallbackComponent={TeamMemberCardFallbackComponent}
              onError={(error, errorInfo) => console.error({ error, errorInfo })}
              onReset={() => {
                setDetailStatus(false);
                setMember('fw1');
              }}
            >
              <AboutTeams/>
              <TeamMembers 
                openMemberDetails={openMemberDetails}
              />
              {detailStatus && 
                <TeamMemberDetails className={detailStatus}
                  toggleDetailStatus={toggleDetailStatus}
                  member={member}/>
              } 
            </ErrorBoundary>
      </section>
    );
};

export default Teams;
