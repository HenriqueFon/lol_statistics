import Data from "../../../Data/Data";
const MatchHistory = ({name, profileIconId, summonerLevel}) => {
    return (
        <div className = "match_history">
                <div className = "icon">
                    <img src = {`${Data('summoner_Icon', '', '', '', '')}${profileIconId}.png`} alt = 'Profile_icon'></img>
                </div>
                <div>
                    <h1>{name}</h1>
                </div>
                <p>{summonerLevel}</p>
            </div>
    );
}

export default MatchHistory;