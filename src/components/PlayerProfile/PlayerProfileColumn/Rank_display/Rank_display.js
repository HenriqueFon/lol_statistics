import {useState, useEffect} from "react";
import { FetchRewardsAxios } from "../../../../API/FetchRewardsAxios";
import Rank_display_cards from "./Rank_display_cards/Rank_display_cards";

const Rank_display = ({summoner_id}) => {

    const [rankedSolo, setRankedSolo] = useState();
    const [rankedFlex, setRankedFlex] = useState({});

    const organizeDataSolo = (rankedStatus) => {
        if(rankedStatus.queueType = 'RANKED_FLEX_SR') {
            const {leaguePoints, losses, wins, tier, rank} = rankedStatus[0];
            setRankedFlex({leaguePoints, losses, wins, tier, rank});
        } else {
            const {leaguePoints, losses, wins, tier, rank} = rankedStatus[0];
            setRankedSolo({leaguePoints, losses, wins, tier, rank});
        }
    }

    const organizeSoloData = (rankedStatus) => {
        const {leaguePoints, losses, wins, tier, rank} = rankedStatus[0];
        setRankedSolo({leaguePoints, losses, wins, tier, rank});
    }

    const organizeFlexData = (rankedStatus) => {
        const {leaguePoints, losses, wins, tier, rank} = rankedStatus[1];
        setRankedFlex({leaguePoints, losses, wins, tier, rank});
    }

    const organizeDataComplete = (rankedStatus) => {
        organizeSoloData(rankedStatus);
        organizeFlexData(rankedStatus);
    }

    const getPlayerRankData = async (summoner_id) => {
        let res = await FetchRewardsAxios('player_rank','', '', '', '', summoner_id);
        if(res.length == 1) {
            organizeDataSolo(res);
        } else  {
            organizeDataComplete(res);
        }
    }
    
    useEffect(() => {
         getPlayerRankData(summoner_id);
    },[])
    
    return (
        <div>
            { rankedSolo && <Rank_display_cards queue = 'Ranqueada Solo'
                                tier = {rankedSolo.tier}
                                leaguePoints = {rankedSolo.leaguePoints}
                                wins = {rankedSolo.wins}
                                losses = {rankedSolo.losses} />
            }
            { rankedFlex && <Rank_display_cards queue = 'Ranqueada Flexível'
                                tier = {rankedFlex.tier}
                                leaguePoints = {rankedFlex.leaguePoints}
                                wins = {rankedFlex.wins}
                                losses = {rankedFlex.losses} />
            }
        </div>
    )
}

export default Rank_display;