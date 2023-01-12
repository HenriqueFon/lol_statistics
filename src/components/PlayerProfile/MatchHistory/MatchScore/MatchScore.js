import './MatchScore.css'
import { Summoner_index } from '../../../../Data/Summoner_index';
import Data from '../../../../Data/Data';
import noItem from './image/no_item.png';

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
                <div className = 'champion_summoners_spells'>
                    <div className = 'champion_summoners_spells_1'>
                        <img src = {getSummonerImage(summoner1Id)} alt = {summoner1Id} />
                    </div>
                        <div className = 'champion_summoners_spells_2'>
                    <img src = {getSummonerImage(summoner2Id)} alt = {summoner2Id} />
                </div>
            </div>
                <div className = 'champion_score'>{kills}/{deaths}/{assists}</div>
                <div className = 'champion_itens'>
                   <div><img src = {item0 ? getSummonerItem(item0) : noItem} alt = {item0} /></div>
                   <div><img src = {item1 ? getSummonerItem(item1) : noItem} alt = {item1} /></div>
                   <div><img src = {item2 ? getSummonerItem(item2) : noItem} alt = {item2} /></div>
                   <div><img src = {item3 ? getSummonerItem(item3) : noItem} alt = {item3} /></div>
                   <div><img src = {item4 ? getSummonerItem(item4) : noItem} alt = {item4} /></div>
                   <div><img src = {item5 ? getSummonerItem(item5) : noItem} alt = {item5} /></div>
                   <div><img src = {item6 ? getSummonerItem(item6) : noItem} alt = {item6} /></div>
                </div>
                <div>{win}</div>
            </div>
        </div>
    );
}

export default MatchScore;