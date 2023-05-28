// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const apiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {iplTeamList: {}, isLoading: true}

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
    </div>
  )

  componentDidMount = () => {
    this.getIplTeamList()
  }

  getIplTeamList = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({iplTeamList: updatedData, isLoading: false})
  }

  renderIplTeamsList = () => {
    const {iplTeamList} = this.state
    return (
      <ul className="teams-list-container">
        {iplTeamList.map(eachTeam => (
          <TeamCard id={eachTeam.id} eachTeamDetails={eachTeam} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    // console.log(iplTeamList)
    return (
      <div className="app-container">
        <div className="ipl-container">
          <div className="header-container">
            <img
              className="logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
            />
            <h1 className="heading">IPL Dashboard</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderIplTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home
