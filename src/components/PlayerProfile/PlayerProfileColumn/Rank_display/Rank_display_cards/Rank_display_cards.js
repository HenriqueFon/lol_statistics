import './Rank_display_cards.css';
import Iron from '../rank_images/Emblem_Iron.png';
import Bronze from '../rank_images/Emblem_Bronze.png';
import Silver from '../rank_images/Emblem_Silver.png';
import Gold from '../rank_images/Emblem_Gold.png';
import Platinum from '../rank_images/Emblem_Platinum.png';
import Diamond from '../rank_images/Emblem_Diamond.png';
import Master from '../rank_images/Emblem_Master.png';
import Grandmaster from '../rank_images/Emblem_Grandmaster.png';

const Rank_display_cards = ({queue,tier, leaguePoints, wins, losses }) => {

    const rankImage = (tier) => {
        if(tier == 'IRON') {
            return Iron;
        }

        if(tier == 'BRONZE') {
            return Bronze;
        }

        if(tier == 'SILVER') {
            return Silver;
        }

        if(tier == 'GOLD') {
            return Gold;
        }

        if(tier == 'PLATINUM') {
            return Platinum;
        }

        if(tier == 'DIAMOND') {
            return Diamond;
        }
        
        if(tier == 'MASTER') {
            return Master;
        }

        if(tier == 'GRANDMASTER') {
            return Grandmaster;
        }

        return 'Image not found';
    }

    return (
        <div className = 'ranked_box'>
            <div className = 'ranked_card'>
                <h2>{queue}</h2>
                <div className = 'ranked_tier'>
                    <img src = {rankImage(tier)} alt = 'Elo image'></img>
                    <div>
                        <p className = 'tier'>{tier}</p>
                        <p className = 'points'>{leaguePoints}</p>
                    </div>
                </div>
                <div className = 'win_loss'>
                    <p>Vitórias:{wins}</p>
                    <p>Derrotas:{losses}</p>
                </div>
            </div>
        </div>
    );
}

export default Rank_display_cards;