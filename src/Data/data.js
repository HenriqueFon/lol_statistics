const Data = (type ,name) => {
    const BASE_URL = "https://br1.api.riotgames.com/lol/";
    const API_KEY = 'RGAPI-585942a9-295a-44f0-8409-bbf1afbf6583';
    if(type == 'encrypt') {
       return `${BASE_URL}summoner/v4/summoners/by-name/${name}?api_key=${API_KEY}`;
    }
    if(type == 'champion_data') {
        return `http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json`;
    }
}

export default Data;