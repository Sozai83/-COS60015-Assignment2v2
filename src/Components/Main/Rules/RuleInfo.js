import React from "react";

const RulesInfo = (props) => {
    const ruleCardClass = "RuleCard "
    const selected = props.selected;
    const beginnerClass = ruleCardClass + (selected !== 'BeginnerRules' ? 'Hidden' : '');
    const advanceClass = ruleCardClass + (selected !== 'AdvanceRules' ? 'Hidden' : '');
    const recentClass = ruleCardClass + (selected !== 'RecentChanges' ? 'Hidden' : '');

  return (
    <div className="Wrapper">
        <section id="BegineerRules" className={beginnerClass}>
                        <h2>Rules for beginners</h2>
                        <article>
                            <div>
                                <h3>How Rugby is Played</h3>
                                <p>
                                    A rugby match is played with 15 players on each team. The game is divided into two halves, with each half lasting 40 minutes.<br/>
                                    The objective of the game is to score points by carrying, passing, or kicking the ball over the opposition's goal line.<br/>
                                    A team can score points in several ways, including a try, a penalty kick, or a drop goal.<br/>
                                    A try is worth five points, and it is awarded when a player touches the ball down in the opposition's in-goal area. A conversion kick can be attempted after a try and is worth two points.<br/>
                                    Forward Passes: Unlike in other sports like American football, a forward pass is not allowed in rugby. Players can only pass the ball laterally or backwards.
                                </p>
                            </div>
                            <figure>
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/-LjUeplfN6Q" title="YouTube video player" loading="lazy" allowFullScreen></iframe>
                                <i className="Credit">Video made by <a href="https://www.youtube.com/@rugbykishiboy7930" target="blank">Rugby Kishiboy</a></i>
                            </figure>
                        </article>
                        <article>
                            <div>                                                            
                                <h3>Some Basic Rules</h3>
                                <b>Tackling:</b><br/>
                                <p>Tackling is a crucial part of rugby. It involves bringing an opponent to the ground, but must be done below the shoulders and without using excessive force. High tackles or tackles that endanger the safety of players can result in penalties, yellow cards, or red cards.</p>
                                <b>Rucks and Mauls:</b>
                                <p>When a player is tackled, the game continues in a ruck or a maul. In a ruck, players from both teams bind together around the ball on the ground, while in a maul, players bind together around a ball carrier who is still on their feet.</p>
                                <b>Scrums:</b>
                                <p> A scrum is a way of restarting play after a minor rule violation, such as a forward pass. It involves the eight forwards from each team binding together and pushing against each other while the scrum-half from the team with possession of the ball feeds the ball into the scrum.</p>
                                <b>Penalties:</b>
                                <p> There are various penalties in rugby, such as offsides, high tackles, or playing the ball on the ground. Penalties can result in a free kick, a penalty kick, or a yellow or red card for the offending player.</p>
                            </div>
                            <figure>
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/Vn5fwhxhj4s" title="YouTube video player" loading="lazy" allowFullScreen></iframe>
                                <i className="Credit">Video made by <a href="https://www.youtube.com/@SapporoPRD" target="blank">SapporoPRD</a></i>
                            </figure>
                        </article>
                    </section>
                    <section id="AdvanceRules"  className={advanceClass}>
                        <h2>Rules for advanced fans</h2>
                        <article>
                            <div>
                                <b>Lineouts:</b>
                                <p>A lineout is used to restart play when the ball has gone out of bounds. Players form two parallel lines and a player from the team that did not touch the ball last before it went out throws the ball down the middle of the line. The teams compete to catch the ball and gain possession.</p>
                                <b>Advantage:</b>
                                <p>If a team commits a minor rule violation, the referee can choose to play "advantage" instead of awarding a penalty. If the team that was fouled gains an advantage from the violation, play continues. If they do not gain an advantage, the referee will bring play back and award a penalty.</p>
                                <b>Tackled Player:</b>
                                <p> A tackled player must release the ball immediately and roll away from it to allow play to continue. If the player does not do this, they will be penalized.</p>
                                <b>Scrum Half:</b>
                                <p>The scrum half is a crucial position in rugby. They are responsible for feeding the ball into the scrum, passing the ball out of the scrum, and making quick, accurate passes to their teammates.</p>
                                <b>Offsides:</b>
                                <p>Players must be onside to participate in play. If a player is offside, they cannot participate in the game until they have come back onside. A player can be offside if they are in front of the ball or if they are in front of a teammate who is carrying the ball.</p>
                                <b>Knock On:</b>
                                <p>If a player knocks the ball forward with their hands, it is considered a knock on and play stops. The opposing team is awarded a scrum.</p>                                     
                            </div>
                            <figure>
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/39qZqnlqJ34" title="YouTube video player" loading="lazy" allowFullScreen></iframe>
                                <i className="Credit">Video made by <a href="https://www.youtube.com/@jrfuofficial" target="blank">JAPAN RUGBY TV</a></i>
                            </figure>
                        </article>
                    </section>
                    <section id="RecentChanges"  className={recentClass}>
                        <h2>Recent rule changes</h2>
                        <article>
                            <div>
                                <b>High Tackles:</b>
                                <p>In recent years, rugby has become increasingly concerned with player safety, particularly regarding high tackles. The laws around high tackles have been changed to make them more severe, with high tackles now resulting in a yellow or red card depending on the severity of the offense.</p>
                                <b>Scrum Engagement:</b>
                                <p>The way that scrums are engaged has been changed to make them safer and reduce the risk of injury. The new rules require both sets of forwards to bind together before the ball is put in, with the scrum-half then feeding the ball once both packs are stationary.</p>
                                <b>Ruck and Maul:</b>
                                <p>The laws around rucks and mauls have been clarified to make them safer and more effective. Referees are now required to police the ruck more strictly, with players not allowed to dive into the ruck or come in from the side.</p>
                                <b>TMO (Television Match Official):</b>
                                <p>The use of technology in rugby has become increasingly common, and the role of the TMO has been expanded to allow for more accurate decision-making. TMOs are now able to review incidents that occurred before a try was scored, as well as incidents of foul play.</p>
                                <b>Kick-Off:</b>
                                <p>The kick-off rules have been changed to make them more exciting and encourage attacking play. Kick-offs are now allowed to be taken from anywhere along the 22-meter line, rather than just from the center of the pitch.</p>
                            </div>
                            <figure>
                                <iframe width="500" height="315" src="https://www.youtube.com/embed/ZXxuoXu7qTw" title="YouTube video player" loading="lazy" allowFullScreen></iframe>
                                <i className="Credit">Video made by <a href="https://www.youtube.com/@taizochannel6718" target="blank">ラグビープロレフリー/Taizo Channel</a></i>
                            </figure>
                        </article>
                    </section>
    </div>
    );
};

export default RulesInfo;
