import Data from "../../../Data/Data";
import { FetchRewardsAxios } from "../../../API/FetchRewardsAxios";
import { useState ,useEffect } from "react";
import MatchScore from "./MatchScore/MatchScore";

const MatchHistory = ({name, profileIconId, summonerLevel, puuid}) => {
    
    let matchIds = [];
    const [history, setHistory] = useState([]);
    const [playersInMatch, setPlayersInMatch] = useState([]);
    const [player, setPlayer] = useState([]);
    
    const playerObject = (playerData) => {
        const {
            assists, 
            champExperience, 
            championName,
            deaths, 
            win,
            kills, 
            individualPosition,
            item0,
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            summoner1Id, 
            summoner2Id
        } = playerData[0];

        const data = {
            assists: assists,
            champExperience: champExperience,
            championName: championName,
            deaths: deaths,
            win: win, 
            kills: kills,
            individualPosition: individualPosition,
            item0: item0,
            item1: item1,
            item2: item2,
            item3: item3,
            item4: item4,
            item5: item5,
            item6: item6,
            summoner1Id: summoner1Id,
            summoner2Id: summoner2Id
        }
        return data;
    }

    const getMatchDataFiltered = (data, dadosUser) => {
        setHistory(data);
        setPlayersInMatch(data[0].info.participants);
        let playerData = data[0].info.participants.filter(element => element.summonerName == name);
        playerObject(playerData);
    }

    const getMatchId = async () => {
        let dados = await FetchRewardsAxios('match_id','', '', puuid, '','');
        matchIds = dados;
        let history = await getMatchHistory(matchIds);
        await Promise.all(history).then(response => getMatchDataFiltered(response));
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
               <MatchScore />
            </div>
    );
}

export default MatchHistory;