import Data from "../../../Data/Data";
import { FetchRewardsAxios } from "../../../API/FetchRewardsAxios";
import { useState, useEffect } from "react";

const MatchHistory = ({name, profileIconId, summonerLevel, puuid}) => {
    
    let matchIds = [];
    const {historyMatch, setHistoryMatch} = useState([]);

    const getMatchId = async () => {
        let dados = await FetchRewardsAxios('match_id','', '', puuid, '','');
        matchIds = dados;
        let history = await getMatchHistory(matchIds);
        Promise.all(history).then(response => console.log(response))
    }

    const getMatchHistory = async (matchIds) => {
        const matchHistory =  await matchIds.map(element => FetchRewardsAxios('match_history', '', '', '', element, ''));
        return matchHistory;
    }

    useEffect(() => {
        getMatchId();
    }, [])
    
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