import './styles.css'

const TravelCard = props => {
  const {teamData} = props
  const {teamName, teamImageUrl, teamDescription} = teamData

  return (
    <li className="team-card">
      <div className="travel-card-space">
        <img src={teamImageUrl} alt={teamName} className="team-logo" />
        <div className="travel-card-description">
          <h1 className="team-name">{teamName}</h1>
          <p className="travel">{teamDescription}</p>
        </div>
      </div>
    </li>
  )
}

export default TravelCard
