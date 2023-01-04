import "./PlayerProfile.css";
import Data from "../../Data/Data";

const PlayerProfile = ({ playerData }) => {

    const {accountId, id, name, profileIconId, summonerLevel} = playerData;
    
    return (
        <div className = "summoner_column">
            <div className = "icon">
                <img src = {`${Data('summoner_Icon', '', '', '', '')}${profileIconId}.png`} alt = 'Profile_icon'></img>
            </div>
            <div>
                <h1>{name}</h1>
            </div>
            <p>Level:{summonerLevel}</p>
        </div>
    );
}

export default PlayerProfile;