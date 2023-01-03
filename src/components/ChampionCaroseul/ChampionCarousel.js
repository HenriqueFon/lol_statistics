import { useState, useEffect } from "react";
import Data from "../../Data/Data";
import { getData } from "../../API/getData";
import { Champion_index } from "../../Data/Champion_index";
import { motion } from "framer-motion";
import './ChampionCaroseul.css';


const ChampionCarousel = () => {

    const [data, setData] = useState([]);
    const [names, setNames] = useState([]);
    const [championSplash, setCHampionSplash] = useState([]);

    const getFreeWeekAsync = async () => {
        console.log('rodei')
        let dados = await getData('free_rotation', '');
        setData(dados.freeChampionIds);
        console.log(dados);
    }

    const createArrayOfNames = async (data) => {
        let namesArray = await data.map(elements =>  Champion_index(elements));
        setNames(namesArray);
    }

    const getChampionSplash = (names) => {
        let image = names.map(element =>{return `${Data('champion_splash', '')}${element}_0.jpg`});
        console.log(image)
        setCHampionSplash(image)
    }

    const doRequisitions = async () => {
        await getFreeWeekAsync();
        
        // let names = ['Jinx', 'Talon', 'Zed']
        console.log(names)
        await getChampionSplash(names);
    }

    useEffect(() => {
        doRequisitions();
    },[]);

    return (
       <motion.div className = 'carousel' whileTap = {{cursor:"grabbing"}}>
            <motion.div className = 'inner'
                drag = "x"
                initial = {{x:100}}
                animate = {{x: 0}}
                transition = {{duration: 0.8}}
            >
                {championSplash.map((image, i) =>  (<motion.div className = "item" key = {image}><img key = {i} src ={image} alt = ''></img> </motion.div>))}
            </motion.div>
       </motion.div>
    )
}

export default ChampionCarousel;