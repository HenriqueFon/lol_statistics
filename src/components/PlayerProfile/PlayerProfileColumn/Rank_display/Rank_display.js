import './Rank_display.css';
import {useState, useEffect} from "react";
import { FetchRewardsAxios } from "../../../../API/FetchRewardsAxios";

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
        console.log(res);
        if(res.length == 1) {
            organizeDataSolo(res);
        } else  {
            organizeDataComplete(res);
        }
    }
    
    useEffect(() => {
         getPlayerRankData(summoner_id);
    },[])

    console.log(rankedFlex);
    console.log(rankedSolo);
    
    // const {leaguePoints, losses, queueType, rank, tier, wins} = playerRank[0];
    // console.log(queueType)
    return (
        <div></div>
        // <div className = 'ranked_box'>
        //     <div className = 'solo'>
        //         <h2>{queueType}</h2>
        //         <p>{tier}</p>
        //     </div>
        //     <div className = 'flex'>
        //         <h2>{queueType}</h2>
        //         <p>{tier}</p>
        //     </div>
        // </div>
    )
}

export default Rank_display;