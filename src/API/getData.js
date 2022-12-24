import { FetchRewards } from "./FetchRewards";

export const getData = async (state, name) => {
    let res = await FetchRewards(state, name);
    return res;
}

