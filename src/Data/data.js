export function data(api, name)  {
    const API = "https://br1.api.riotgames.com/lol/";

    const SUMMONER = (api, name, API) => {
        if(api == "encrypt") {
            let encrypt = `${API}summoner/v4/summoners/by-name/${name}`
            return encrypt;
        }
    }

    const mountedQuery = SUMMONER(api, name, API);
    
    return mountedQuery;
}

