import "./NameForm";
import { useState, useEffect } from "react";
import { FetchRewards } from "../../API/FetchRewards";

const NameForm = () => {
    
    const [summonerName, setSummonerName] = useState();
    const [data, setData] = useState();
    const [state, setState] = useState();
    const [ready, setReady] = useState(false);

    const getData = async (state, name) => {
        let res = await FetchRewards(state, name);
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
        if(ready) getData(state, summonerName)
    },[ready])

    return(
        <div>
            <form onSubmit = {handleSubmit}>
            <input type = "text"
                   name = "summoner_name"
                   onChange = {handleChange}
            />
            <button>Pesquisar</button>
            </form>
        </div>
    );
}

export default NameForm;