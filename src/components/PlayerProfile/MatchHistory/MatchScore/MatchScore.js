import { useEffect, useState } from "react";
import Data from "../../../../Data/Data";
import './MatchScore.css';

const MatchScore = ({player}) => {
    
    const {
        assists,
        championExperience,
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
    


    return (
        <div>
            <div>
                <div className = 'champion_icon'>
                    <img src = {championIcon} alt = {championName} />
                </div>
            </div>
        </div>
    );
}

export default MatchScore;