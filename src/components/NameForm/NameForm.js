import "./NameForm.css";
import { useState, useEffect } from "react";
import { getData } from "../../API/getData";
import PlayerProfile from "../PlayerProfile/PlayerProfile";

const NameForm = () => {
    
    const [summonerName, setSummonerName] = useState();
    const [data, setData] = useState();
    const [state, setState] = useState();
    const [ready, setReady] = useState(false);

    const getDataAsync = async (state, name) => {
        let res = await getData(state, name)
        setData(res);
    }
    
    const handleChange = (event) => {
        setSummonerName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setState('encrypt');
        setReady(true);
    }
    
    useEffect(() => {
        if(ready) getDataAsync(state, summonerName);
    },[ready])
    
    return(
        <div>
            <div className = 'NameForm'>
                <form onSubmit = {handleSubmit}>
                    <input type = "text"
                        placeholder = "Digite o nome do invocador"
                        name = "summoner_name"
                        onChange = {handleChange}
                    />
                    <button>Pesquisar</button>
                </form>
            </div>
            <div>
                {data && <PlayerProfile playerData = { data }/>}
            </div>
        </div>
    );
}

export default NameForm;