import axios from "axios";
import Data from "../Data/Data";

export const FetchRewardsAxios = async (state, name, filter ,puuid, match_id, summoner_id) => {
    let url = Data(state, name, filter, puuid, match_id, summoner_id);
    const res = await axios.get(url);
    
    if(res.status !== 200) {
        console.log("Erro ao chamar a API");
        return [];
    }

    return res.data;
}