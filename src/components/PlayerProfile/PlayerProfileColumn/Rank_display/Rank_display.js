
import {useState, useEffect} from "react";
import { FetchRewardsAxios } from "../../../../API/FetchRewardsAxios";

const Rank_display = ({summoner_id}) => {

    const [playerRank, setPlayerRank] = useState();

    const getPlayerRankData = async (summoner_id) => {
        let res = await FetchRewardsAxios('player_rank','', '', '', '', summoner_id);
        setPlayerRank(res);
    }
    
    useEffect(() => {
         getPlayerRankData(summoner_id);
    },[])

    console.log(playerRank)

    return (
        <div>Ranquedi</div>
    )
}

export default Rank_display;