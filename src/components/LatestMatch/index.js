// Write your code here

import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      result,
      manOfTheMatch,
      firstInnings,
      //   matchStatus,
      secondInnings,
      umpires,
      venue,
    } = latestMatchDetails
    // const resultCss = matchStatus === 'Won' ? 'result-won' : 'result-lost'

    return (
      <div>
        <p className="latest-match-heading">Latest Matches</p>
        <div className="latest-matches-container">
          <div className="latest-matches-top-container">
            <div className="latest-match-details">
              <h1 className="competing-team-name">{competingTeam}</h1>
              <p className="date">{date}</p>
              <p className="venue">{venue}</p>
              <p className="result">{result}</p>
            </div>
            <img
              className="competing-team-logo"
              src={competingTeamLogo}
              alt={competingTeam}
            />
          </div>
          <hr className="line" />
          <div className="latest-matches-bottom">
            <p className="details">First Innings</p>
            <p className="details">{firstInnings}</p>
            <p className="details">Second Innings</p>
            <p className="details">{secondInnings}</p>
            <p className="man-of-the-match">Man Of The Match</p>
            <p className="details">{manOfTheMatch}</p>
            <p className="details">Umpires</p>
            <p className="details">{umpires}</p>
          </div>
          {/* <p className={`status ${resultCss}`}>{matchStatus}</p> */}
        </div>
      </div>
    )
  }
}

export default LatestMatch
