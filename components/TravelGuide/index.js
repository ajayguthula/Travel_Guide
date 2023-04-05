import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TravelCard'
import './styles.css'

class TravelGuide extends Component {
  state = {
    isLoading: false,
    packages: [],
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    this.setState({isLoading: true})
    const travelApiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(travelApiUrl)
    const fetchedData = await response.json()
    const formattedData = fetchedData.packages.map(team => ({
      teamId: team.id,
      teamName: team.name,
      teamImageUrl: team.image_url,
      teamDescription: team.description,
    }))
    this.setState({packages: formattedData, isLoading: false})
  }

  renderTeamsList = () => {
    const {packages} = this.state
    return (
      <ul className="teams-list">
        {packages.map(team => (
          <TeamCard teamData={team} key={team.teamId} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader
        className="loader-container"
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
      />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-route-container">
        <div className="teams-list-container">
          <div className="ipl-dashboard-heading-container">
            <h1 className="ipl-dashboard-heading">Travel Guide</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default TravelGuide
