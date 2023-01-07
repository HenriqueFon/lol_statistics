import "./PlayerProfileColumn.css";
import Data from "../../../Data/Data";
import Rank_display from "./Rank_display/Rank_display";

const PlayerProfileColumn = ({name, profileIconId, summonerLevel, id}) => {
    
    return (
        <div className = "summoner_column">
            <div className = "summoner_apr">
                <div className = "icon">
                    <img src = {`${Data('summoner_Icon', '', '', '', '')}${profileIconId}.png`} alt = 'Profile_icon'></img>
                </div>
                <div className = "summoner_level">
                    {summonerLevel}
                </div>
                <div className = "summoner_name">
                    <h1>{name}</h1>
                </div>
            </div>
            <Rank_display summoner_id = {id}/>
        </div>
    )
}

export default PlayerProfileColumn;