import { useEffect, useState } from "react";
import Data from "../../../../Data/Data";
import Summoner_index from "../../../../Data/Summoner_index"
import './MatchScore.css';

const MatchScore = ({player}) => {
    
    const {
        assists,
        champLevel,
        championName,
        championIcon,
        deaths,
        individualPosition,
        item0,
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        kills,
        summoner1Id,
        summoner2Id,
        win
    } = player;
    
    const getSummonerImage = (id) => {
        let summonerName = Summoner_index(id);
        let url = Data('summoners_spells', '', '', '', '', '');
    }

    return (
        <div>
            <div className = 'score'>
                <div className = 'champion_icon'>
                    <img src = {championIcon} alt = {championName} />
                </div>
                <div className = 'champion_level'>{champLevel}</div>
                <div className = 'champion_summoners_spells_1'>{summoner1Id}</div>
                <div className = 'champion_summoners_spells_2'>{summoner2Id}</div>
                <div className = 'champion_score'>{kills}/{deaths}/{assists}</div>
                <div className = 'champion_itens'>
                   <div>{item0}</div>
                   <div>{item1}</div>
                   <div>{item2}</div>
                   <div>{item3}</div>
                   <div>{item4}</div>
                   <div>{item5}</div>
                   <div>{item6}</div>
                </div>
            </div>
        </div>
    );
}

export default MatchScore;