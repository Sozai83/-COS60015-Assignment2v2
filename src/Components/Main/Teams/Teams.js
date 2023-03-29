import React, {useState} from "react";
import AboutTeams from './AboutTeams'
import TeamMembers from "./TeamMembers";
import TeamMemberDetails from "./TeamMemberDetails"
import '../../../CSS/layout/teams.scss'
import {ErrorBoundary} from 'react-error-boundary'

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
  const [detailStatus, setDetailStatus] = useState(false);
  const toggleDetailStatus = () => setDetailStatus((curStatus) => curStatus ? false : true);
  const [member, setMember] = useState('fw1');
  const openMemberDetails = (newMember)=>{
    toggleDetailStatus();
    setMember(newMember);
  }

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
