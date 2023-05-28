// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {eachTeamDetails} = this.props
    const {name, teamImageUrl, id} = eachTeamDetails
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="card-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
