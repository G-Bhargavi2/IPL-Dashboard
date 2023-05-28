// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  state = {isHovered: false}

  render() {
    const {matchDetails} = this.props
    const {
      competingTeamLogo,
      result,
      matchStatus,
      competingTeam,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      venue,
      date,
      umpires,
    } = matchDetails
    const resultCss = matchStatus === 'Won' ? 'result-won' : 'result-lost'
    const {isHovered} = this.state

    return (
      <li
        className={`match-list-container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => this.setState({isHovered: true})}
        onMouseLeave={() => this.setState({isHovered: false})}
      >
        {isHovered ? (
          <div className="content-container">
            <h1 className="hovered-competing-team">{firstInnings}</h1>
            <p className="hovered-competing-team">VS</p>
            <h1 className="hovered-competing-team">{secondInnings}</h1>
            <p className="hovered-date">{date}</p>
            <p className="hovered-venue">{venue}</p>
            <p className="hovered-umpires">Umpires {umpires}</p>
            <p className="hovered-match-result">{result}</p>
            <p className="hovered-man-of-the-match">Man Of The Match</p>
            <p className="hovered-man-of-the-match">{manOfTheMatch}</p>
            <p className={`status ${resultCss}`}>{matchStatus}</p>
          </div>
        ) : (
          <div className="content-container">
            <img
              className="match-list-team-logo"
              src={competingTeamLogo}
              alt={competingTeam}
            />
            <h1 className="competing-team">{competingTeam}</h1>
            <p className="match-result">{result}</p>
            <p className={`status ${resultCss}`}>{matchStatus}</p>
          </div>
        )}
      </li>
    )
  }
}

export default MatchCard
