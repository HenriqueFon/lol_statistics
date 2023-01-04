import "./PlayerProfileColumn.css";
import Data from "../../../Data/Data";

const PlayerProfileColumn = ({name, profileIconId, summonerLevel}) => {
    return (
        <div className = "summoner_column">
                <div className = "icon">
                    <img src = {`${Data('summoner_Icon', '', '', '', '')}${profileIconId}.png`} alt = 'Profile_icon'></img>
                    <h2>{summonerLevel}</h2>
                </div>
                <div>
                    <p>{summonerLevel}</p>
                </div>
                <div>
                    <h1>{name}</h1>
                </div>
            </div>
    )
}

export default PlayerProfileColumn;