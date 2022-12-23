import axios from "axios";
import Data from "../Data/Data";

export const FetchRewards = async (state, name) => {
    let url = Data(state, name);
    
    const res = await axios.get(url);
    
    if(res != 200) {
        console.log("Erro ao chamar a API");
        return [];
    }

    return res.data;
}