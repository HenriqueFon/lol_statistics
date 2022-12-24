const Data = (type ,name) => {
    const BASE_URL = "https://br1.api.riotgames.com/lol/";
    const ASSETS_URL = "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/";
    const API_KEY = 'RGAPI-a776ca86-8d5c-4863-ad9a-7fc7715efb42';

    if(type == 'encrypt') {
       return `${BASE_URL}summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`;
    }

    if(type == 'champion_mastery') {
        return `${BASE_URL}champion-mastery/v4/champion-masteries/by-summoner/${name}?api_key=${API_KEY}`;
    }

    if(type == 'champion_mastery_filtered') {
        return `${BASE_URL}champion-mastery/v4/champion-masteries/by-summoner/${name}/top?count=`;
    }

    if(type == 'champion_data') {
        return `${ASSETS_URL}champion.json`;
    }

    if(type == 'champion_abilities_assets') {
        return `${ASSETS_URL}`;
    }

    if(type == 'summoner_Icon') {
        return `${ASSETS_URL}profileicon.json`;
    }

    if(type == 'items') {
        return `${ASSETS_URL}item.json`;
    }
}

export default Data;