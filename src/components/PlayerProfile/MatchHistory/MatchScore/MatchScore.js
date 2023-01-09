import './MatchScore.css'
import { Summoner_index } from '../../../../Data/Summoner_index';
import Data from '../../../../Data/Data';

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
        let url = Data('summoners_spells', '', '', '', '', '');
        let summonerName = Summoner_index(id);
        return `${url}${summonerName}.png`;
    }

    const getSummonerItem = (id) => {
        let url = Data('items', '', '', '', '', '');
        return `${url}${id}.png`;
    }
    
    return (
        <div>
            <div className = 'score'>
                <div className = 'champion_icon'>
                    <img src = {championIcon} alt = {championName} />
                </div>
                <div className = 'champion_level'>{champLevel}</div>
                <div className = 'champion_summoners_spells_1'>
                    <img src = {getSummonerImage(summoner1Id)} alt = {summoner1Id} />
                </div>
                <div className = 'champion_summoners_spells_2'>
                <img src = {getSummonerImage(summoner2Id)} alt = {summoner2Id} />
                </div>
                <div className = 'champion_score'>{kills}/{deaths}/{assists}</div>
                <div className = 'champion_itens'>
                   <div><img src = {getSummonerItem(item0)} alt = {item0} /></div>
                   <div><img src = {getSummonerItem(item1)} alt = {item1} /></div>
                   <div><img src = {getSummonerItem(item2)} alt = {item2} /></div>
                   <div><img src = {getSummonerItem(item3)} alt = {item3} /></div>
                   <div><img src = {getSummonerItem(item4)} alt = {item4} /></div>
                   <div><img src = {getSummonerItem(item5)} alt = {item5} /></div>
                   <div><img src = {getSummonerItem(item6)} alt = {item6} /></div>
                </div>
            </div>
        </div>
    );
}

export default MatchScore;