import axios from "axios";
import Data from "../Data/Data";

export const FetchRewardsAxios = async (state, name) => {
    let url = Data(state, name);
    const res = await axios.get(url);
    
    if(res.status !== 200) {
        console.log("Erro ao chamar a API");
        return [];
    }

    return res.data;
}