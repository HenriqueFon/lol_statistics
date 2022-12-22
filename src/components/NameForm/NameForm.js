import "./NameForm";
import { useState } from "react";
import { UseFetch } from "../../hook/UseFetch";

const NameForm = () => {

    const [summonerName,setSummonerName] = useState();
    const [data, setData] = useState();

    const handleChange = (event) => {
       setSummonerName(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setData(await UseFetch(summonerName));
    }

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