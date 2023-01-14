import './MatchHistory.css';
import Data from '../../../Data/Data';
import { FetchRewardsAxios } from "../../../API/FetchRewardsAxios";
import { useState ,useEffect } from "react";
import MatchScore from "./MatchScore/MatchScore";

const MatchHistory = ({name, profileIconId, summonerLevel, puuid}) => {
    
    let matchIds = [];
    const [history, setHistory] = useState([]);
    const [playerInMatch, setPlayerInMatch] = useState([]);
    const [player, setPlayer] = useState([]);
    let image = '';

    const playerObject = (playerData) => {
        const {
            assists,  
            champLevel,
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

        let imageData = getChampionIcon(championName);
        imageData
        .then(resolve => image = resolve)

        const data = {
            assists: assists,
            champLevel: champLevel,
            championName: championName,
            championIcon: image, 
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

        let matches = data.map(element => element.info.participants);
        
        for (let match of matches) {
            for (let player of match) {
                if(player.summonerName == 'Haisee') {
                    setPlayerInMatch(previousMatch => [...previousMatch, player])
                }
            }
        }
        
        let playerMatches = matches.map(element => console.log(element.championName));
        console.log(setPlayerInMatch)
        let playerData = data[0].info.participants.filter(element => element.summonerName == name);

        let object = playerObject(playerData);
        setPlayer(object);
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

    const mountImage = (championName) => {
        return `${Data('champion_splash','','','','','')}${championName}_0.jpg`;
    }

    const getChampionIcon = async(championName) => {
        let icon = await mountImage(championName);
        return icon;
    }

    useEffect(() => {
        getMatchId();
    }, [])
    
    return (
        <div className = "match_history">
               <MatchScore player = {player}/>
        </div>
    );
}

export default MatchHistory;