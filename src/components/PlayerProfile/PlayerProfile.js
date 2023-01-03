import "./PlayerProfile";
import { useEffect } from "react";
import { getData } from "../../API/getData";

const PlayerProfile = ({ playerData }) => {

    const {accountId, id, name, profileIconId, summonerLevel} = playerData;
    
    return (
        <div className = "summoner_column">
            <h1>{name}</h1>
        </div>
    );
}

export default PlayerProfile;