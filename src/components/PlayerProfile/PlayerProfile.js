import "./PlayerProfile.css";
import Data from "../../Data/Data";
import PlayerProfileColumn from "./PlayerProfileColumn/PlayerProfileColumn";

const PlayerProfile = ({ playerData }) => {

    const {accountId, id, name, profileIconId, summonerLevel} = playerData;
    
    return (
        <div className = "summoner_info">
            <PlayerProfileColumn name = {name} 
                                 profileIconId = {profileIconId}
                                 summonerLevel = {summonerLevel}
            />
            <div className = "match_history">
                <div className = "icon">
                    <img src = {`${Data('summoner_Icon', '', '', '', '')}${profileIconId}.png`} alt = 'Profile_icon'></img>
                </div>
                <div>
                    <h1>{name}</h1>
                </div>
                <p>{summonerLevel}</p>
            </div>
        </div>
    );
}

export default PlayerProfile;