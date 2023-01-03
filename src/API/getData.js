import { FetchRewardsAxios } from "./FetchRewardsAxios";

export const getData = async (state, name) => {
    let res = await FetchRewardsAxios(state, name);
    return res;
}

