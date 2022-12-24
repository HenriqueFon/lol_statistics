import "./PlayerProfile";
import { useEffect } from "react";
import { getData } from "../../API/getData";

const PlayerProfile = ({ playerData }) => {

    const {accountId, id, name, profileIconId, summonerLevel} = playerData;

    let state = 'champion_mastery'
    

    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default PlayerProfile;