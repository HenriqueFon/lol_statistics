import { useEffect, useState } from "react";
import { getData } from "../../API/getData";
import ChampionCarousel from "./ChampionCarousel";

const ChampionCaroseulData = () => {

    const [data, setData] = useState([]);

    const getFreeWeekAsync = async () => {
        console.log('rodei')
        let dados = await getData('free_rotation', '');
        setData(dados.freeChampionIds);
        console.log(dados)
    }

    const doRequisitions = async () => {
        await getFreeWeekAsync();
    }

    useEffect(() => {
        doRequisitions();
    },[]);

    
    
    return (
        <ChampionCarousel data = {data}/>
    )
}

export default ChampionCaroseulData;