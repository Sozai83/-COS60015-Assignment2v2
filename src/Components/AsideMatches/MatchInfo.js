import React from 'react'

const GameInfo = (props) => {
    const selected = props.selected;
    //Returns selected matches information
  return (
    <React.Fragment>
	  	{selected === "2023" && 
            (<section id="Matches2023">
                    <section className="MatchCard">
                        <table>
                            <tbody>
                                <tr className="MatchTitle">
                                    <th colSpan="2">Lipovitan D Challenge Cup 2023</th>
                                </tr>
                                <tr className="MatchTeams">
                                    <th>Game: </th>
                                    <td>
                                        <img src="./img/teams/new_zealand.png" alt="NZ" className="Team"/>
                                        <div className="Teams">New Zealand vs Japan</div>
                                        <img src="./img/teams/jpn.png" alt="Japan" className="Team"/>
                                    </td>
                                </tr>
                                <tr className="MatchSchedule">
                                    <th>Date: </th>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="MatchDate">08 July, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td className="MatchTime">4:30PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="MatchPlace">
                                    <th>Place: </th>
                                    <td>Tokyo, Japan</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Map">
                            <h4>Map:</h4>
                            <div>
                                <div className="GmapCanvas">
                                    <iframe width="400" height="300" title="Map 2 Chome-8-35 Kitaaoyama, Minato City, Tokyo 107-0061" src="https://maps.google.com/maps?q=chichibu%20stadium&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                </div>
                            </div>
                            <address><b>Address: </b>2 Chome-8-35 Kitaaoyama, Minato City, Tokyo 107-0061</address>
                            <b>Phone: </b><a href="tel:+81334013881" className="phone">+81-33-401-3881</a>
                        </div>
                        <div className="BuyTicket">
                            <a href="http://en.rugby-japan.jp/ticket/" target="blank" className="Button">Buy ticket</a>
                        </div>
                    </section>
                    <section className="MatchCard">
                        <table>
                            <tbody>
                                <tr className="MatchTitle">
                                    <th colSpan="2">2023 Lipovitan-D Rugby Championship</th>
                                </tr>
                                <tr className="MatchTeams">
                                    <th>Game: </th>
                                    <td>
                                        <img src="./img/teams/samoa.jpg" alt="Samoa" className="Team"/>
                                        <div className="Teams">Samoa vs Japan</div>
                                        <img src="./img/teams/jpn.png" alt="Japan" className="Team"/>
                                    </td>
                                </tr>
                                <tr className="MatchSchedule">
                                    <th>Date: </th>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="MatchDate">22 July, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td className="MatchTime">4:30PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="MatchPlace">

                                    <th>Place: </th>
                                    <td>Sapporo, Japan</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Map">
                            <h4>Map:</h4>
                            <div>
                                <div className="GmapCanvas">
                                    <iframe width="400" height="300" title="Map 1 Hitsujigaoka, Toyohira Ward, Sapporo, Hokkaido 062-0045" src="https://maps.google.com/maps?q=sapporo%20dome&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                </div>
                            </div>
                            <address><b>Address: </b>1 Hitsujigaoka, Toyohira Ward, Sapporo, Hokkaido 062-0045</address>
                            <b>Phone: </b><a href="tel:+8111850100" className="phone">+81-11-850-1000</a>
                        </div>
                        <div className="BuyTicket">
                            <a href="http://en.rugby-japan.jp/ticket/" target="blank" className="Button">Buy ticket</a>
                        </div>
                    </section>
                    <section className="MatchCard">
                        <table>
                            <tbody>
                                <tr className="MatchTitle">
                                    <th colSpan="2">2023 Lipovitan-D Rugby Championship</th>
                                </tr>
                                <tr className="MatchTeams">
                                    <th>Game: </th>
                                    <td>
                                        <img src="./img/teams/tonga.jpg" alt="Tonga"  className="Team"/>
                                        <div className="Teams">Tonga vs Japan</div>
                                        <img src="./img/teams/jpn.png" alt="Japan"  className="Team"/>
                                    </td>
                                </tr>
                                <tr className="MatchSchedule">
                                    <th>Date: </th>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="MatchDate">29 July, 2023</td>
                                                </tr>
                                                <tr>
                                                    <td className="MatchTime">4:30PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="MatchPlace">
                                    <th>Place: </th>
                                    <td>Japan</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Map">
                            <h4>Map:</h4>
                            <div>
                                <div className="GmapCanvas">
                                    <iframe width="400" height="300"  title="Map 1 Chome-1-1 Matsubaraminami, Higashiosaka, Osaka" src="https://maps.google.com/maps?q=Hanazono%20Rugby%20Stadium&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                </div>
                            </div>
                            <address><b>Address: </b>1 Chome-1-1 Matsubaraminami, Higashiosaka, Osaka </address>
                            <b>Phone: </b><a href="tel:+81729613668" className="phone">+81-72-961-3668</a>
                        </div>
                        <div className="BuyTicket">
                            <a href="http://en.rugby-japan.jp/ticket/" target="blank" className="Button">Buy ticket</a>
                        </div>
                    </section>
                </section>
            )}
            {selected === '2022' && (
                <section id="matches_2022">
                    <section className="MatchCard">
                        <table>
                            <tbody>
                                <tr className="MatchTitle">
                                    <th colSpan="2">2022 Lipovitan-D Rugby Tour</th>
                                </tr>
                                <tr className="MatchTeams">
                                    <th>Game: </th>
                                    <td>
                                        <img src="./img/teams/france.png" alt="France" className="Team"/>
                                        <div className="Teams">France vs Japan</div>
                                        <img src="./img/teams/jpn.png" alt="Japan" className="Team"/>
                                    </td>
                                </tr>
                                <tr className="Result">
                                    <th>Result: </th>
                                    <td>35 vs 17</td>
                                </tr>
                                <tr className="MatchSchedule">
                                    <th>Date: </th>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="MatchDate">20 November, 2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="MatchTime">10:00PM</td>
                                                </tr>
                                            </tbody>         
                                        </table>
                                    </td>
                                </tr>
                                <tr className="MatchPlace">
                                    <th>Place: </th>
                                    <td>Toulouse, France</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/mAaJeXlOq-A" title="YouTube video player" frameBorder="0" loading="lazy" allowFullScreen></iframe>
                            </figure>
                            <figcaption><i className="Credit">Video made by <a href="https://www.youtube.com/@lloydsportschannel3683" target="blank"> Lloyd Sports Channel </a></i></figcaption>
                        </div>
                    </section>
                    <section className="MatchCard">
                        <table>
                            <tbody>
                                <tr className="MatchTitle">
                                    <th colSpan="2">2022 Lipovitan-D Rugby Tour</th>
                                </tr>
                                <tr className="MatchTeams">
                                    <th>Game: </th>
                                    <td>
                                        <img src="./img/teams/England.png" alt="England" className="Team"/>
                                        <div className="Teams">England vs Japan</div>
                                        <img src="./img/teams/jpn.png" alt="Japan" className="Team"/>
                                    </td>
                                </tr>
                                <tr className="Result">
                                    <th>Result: </th>
                                    <td>52 vs 13</td>
                                </tr>
                                <tr className="MatchSchedule">
                                    <th>Date: </th>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="MatchDate">13 November, 2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="MatchTime">12:15AM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="MatchPlace">
                                    <th>Place: </th>
                                    <td>Tottenham, UK</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/nn38b5raeXQ" title="YouTube video player" frameBorder="0" loading="lazy" allowFullScreen></iframe>
                            </figure>
                            <figcaption><i className="Credit">Video made by <a href="https://www.youtube.com/@AutumnNationsSeries" target="blank">Autumn Nations Series</a></i></figcaption>
                        </div>
                    </section>
                    <section className="MatchCard">
                        <table>
                            <tbody>
                                <tr className="MatchTitle">
                                    <th colSpan="2">2022 Lipovitan-D Rugby Championship</th>
                                </tr>
                                <tr className="MatchTeams">
                                    <th>Game: </th>
                                    <td>
                                        <img src="./img/teams/jpn.png" alt="Japan" className="Team"/>
                                        <div className="Teams">New Zealand vs Japan</div>
                                        <img src="./img/teams/new_zealand.png" alt="NZ" className="Team"/>
                                    </td>
                                </tr>
                                <tr className="Result">
                                    <th>Result: </th>
                                    <td>31 vs 38</td>
                                </tr>
                                <tr className="MatchSchedule">
                                    <th>Date: </th>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="MatchDate">29 October, 2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="MatchTime">2:50PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="MatchPlace">
                                    <th>Place: </th>
                                    <td>Tokyo, Japan</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <img src="./img/video/Highlight_placeholder.jpg" alt="Place holder for the youtube video - All black vs Brave Blossoms"/>
                            </figure>
                            <figcaption><i className="Credit">Photo by <a href="https://unsplash.com/de/@st_lehner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Stefan Lehner</a> on <a href="https://unsplash.com/photos/7Tw9wLnL74w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></i>
                                <br/>
                                <a href="https://www.youtube.com/watch?v=wAqpHh7ghgU&embeds_euri=http%3A%2F%2F127.0.0.1%3A8080%2F" target="blank">Watch video on Youtube</a>
                            </figcaption>
                        </div>
                    </section>
                </section>
            )}
            {selected === '2021' && (
                <section id="matches_2021">
                    <section className="MatchCard">
                        <table>
                            <tbody>
                                <tr className="MatchTitle">
                                    <th colSpan="2">2021 Lipovitan-D Rugby Tour</th>
                                </tr>
                                <tr className="MatchTeams">
                                    <th>Game: </th>
                                    <td>
                                        <img src="./img/teams/scotland.png" alt="Scotland" className="Team"/>
                                        <div className="Teams">Scotland vs Japan</div>
                                        <img src="./img/teams/jpn.png" alt="Japan" className="Team"/>
                                    </td>
                                </tr>
                                <tr className="Result">
                                    <th>Result: </th>
                                    <td>29 vs 20</td>
                                </tr>
                                <tr className="MatchSchedule">
                                    <th>Date: </th>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="MatchDate">20 November, 2021</td>
                                                </tr>
                                                <tr>
                                                    <td className="MatchTime">10:00PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="MatchPlace">
                                    <th>Place: </th>
                                    <td>Maray, UK</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/g-poWjFCXiU" title="YouTube video player" frameBorder="0" loading="lazy" allowFullScreen></iframe>
                            </figure>
                            <figcaption><i className="Credit">Video made by <a href="https://www.youtube.com/@rugbyworldcupjp" target="blank">ワールドラグビー 日本チャンネル</a></i></figcaption>
                        </div>
                    </section>
                    <section className="MatchCard">
                        <table>
                            <tbody>
                                <tr className="MatchTitle">
                                    <th colSpan="2">2021 Lipovitan-D Rugby Tour</th>
                                </tr>
                                <tr className="MatchTeams">
                                    <th>Game: </th>
                                    <td>
                                        <img src="./img/teams/portugal.png" alt="Portugal" className="Team"/>
                                        <div className="Teams">Portugal vs Japan</div>
                                        <img src="./img/teams/jpn.png" alt="Japan" className="Team"/>
                                    </td>
                                </tr>
                                <tr className="Result">
                                    <th>Result: </th>
                                    <td>25 vs 38</td>
                                </tr>
                                <tr className="MatchSchedule">
                                    <th>Date: </th>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="MatchDate">14 November, 2021</td>
                                                </tr>
                                                <tr>
                                                    <td className="MatchTime">2:10AM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="MatchPlace">
                                    <th>Place: </th>
                                    <td>Japan</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/D_EdDO3ltto" title="YouTube video player" frameBorder="0" loading="lazy" allowFullScreen></iframe>
                            </figure>
                            <figcaption><i className="Credit">Video made by <a href="https://www.youtube.com/channel/UCBFtpGAWdU0s-kEkykmjQeg" target="blank">Rugby Z Highlights</a></i></figcaption>
                        </div>
                    </section>
                    <section className="MatchCard">
                        <table>
                            <tbody>
                                <tr className="MatchTitle">
                                    <th colSpan="2">2021 Lipovitan-D Rugby Championship</th>
                                </tr>
                                <tr className="MatchTeams">
                                    <th>Game: </th>
                                    <td>
                                        <img src="./img/teams/jpn.png" alt="Japan" className="Team"/>
                                        <div className="Teams">Australia vs Japan</div>
                                        <img src="./img/teams/australia.jpg" alt="Australia" className="Team"/>
                                    </td>
                                </tr>
                                <tr className="Result">
                                    <th>Result: </th>
                                    <td>23 - 32</td>
                                </tr>
                                <tr className="MatchSchedule">
                                    <th>Date: </th>
                                    <td>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="MatchDate">23 October, 2021</td>
                                                </tr>
                                                <tr>
                                                    <td className="MatchTime">1:45PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="MatchPlace">
                                    <th>Place: </th>
                                    <td>Oita, Japan</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="Highlight">
                            <h3>Highlight</h3>
                            <figure>
                                <iframe width="400" height="315" src="https://www.youtube.com/embed/id7Pbet5HEI" title="YouTube video player" frameBorder="0" loading="lazy" allowFullScreen></iframe>
                            </figure>
                            <figcaption><i className="Credit">Video made by <a href="https://www.youtube.com/channel/UCsMWJnL1aY0g_FBijoRe77g" target="blank"> Rugby.com.au</a></i></figcaption>
                        </div>
                    </section>
                </section>
            )}
    </React.Fragment>
  );
};

export default GameInfo;