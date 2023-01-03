import { useState, useEffect } from "react";
import Data from "../../Data/Data";
import { Champion_index } from "../../Data/Champion_index";
import { motion } from "framer-motion";
import './ChampionCaroseul.css';

const ChampionCarousel = ({data}) => {
    const [championSplash, setCHampionSplash] = useState([]);

    let names = data.map(elements =>  Champion_index(elements));

    const getChampionSplash = (names) => {
        let image = names.map(element =>{return `${Data('champion_splash', '')}${element}_0.jpg`});
        console.log(image)
        setCHampionSplash(image)
    }

    const doRequisitions = async (names) => {
        await getChampionSplash(names);
    }

    useEffect(() => {
        doRequisitions(names);
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