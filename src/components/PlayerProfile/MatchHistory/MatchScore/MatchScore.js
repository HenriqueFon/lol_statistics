import { useEffect, useState } from "react";
import Data from "../../../../Data/Data";
import './MatchScore.css';
import PlayerScore from "./PlayerScore/PlayerScore";
const MatchScore = ({player}) => {
    
    const {
        assists,
        championExperience,
        championName,
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
    
    const [image, setImage] = useState();

    const mountImage = () => {
        return `${Data('champion_splash','','','','','')}${championName}_0.jpg`;
    }

    const getChampionIcon = async() => {
        let icon = await mountImage();
        console.log(icon)
        setImage(icon);
    }
    useEffect(() => {
        getChampionIcon();
    },[])

    console.log(image)

    return (
        <div>
            <div>
                <div className = 'champion_icon'>
                    <img src = {image} alt = {championName} />
                </div>
            </div>
        <PlayerScore 
            assists = {assists}
            championExperience = {championExperience}
            championName = {championName}
            championIcon = {image}
            deaths = {deaths}
            individualPosition = {individualPosition}
            item0 = {item0}
            item1 = {item1}
            item2 = {item2}
            item3 = {item3}
            item4 = {item4}
            item5 = {item5}
            item6 = {item6}
            kills = {kills}
            summoner1Id = {summoner1Id}
            summoner2Id = {summoner2Id}
            win = {win}
        
        />
        </div>
    );
}

export default MatchScore;