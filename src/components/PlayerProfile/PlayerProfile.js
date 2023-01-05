import "./PlayerProfile.css";
import Data from "../../Data/Data";
import PlayerProfileColumn from "./PlayerProfileColumn/PlayerProfileColumn";
import MatchHistory from "./MatchHistory/MatchHistory";

const PlayerProfile = ({ playerData }) => {
    const {accountId, id, name, profileIconId, summonerLevel} = playerData;
    
    return (
        <div className = "summoner_info">
            <PlayerProfileColumn name = {name} 
                                 profileIconId = {profileIconId}
                                 summonerLevel = {summonerLevel}
                                 id = {id}
            />
            <MatchHistory name = {name} 
                                 profileIconId = {profileIconId}
                                 summonerLevel = {summonerLevel}
            />
        </div>
    );
}

export default PlayerProfile;