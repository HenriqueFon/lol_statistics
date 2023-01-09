import './PlayerScore.css';

const PlayerScore = ({
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
}) => {

    return (
        <div>
            <div className = 'champion_icon'>
                <img src = {championIcon} alt = {championName} />
            </div>
        </div>
    );
}

export default PlayerScore;