import { useState, useEffect, useRef, useCallback } from "react";
import Data from "../../Data/Data";
import { getData } from "../../API/getData";
import { Champion_index } from "../../Data/Champion_index";
import { motion } from "framer-motion";
import './ChampionCaroseul.css';


const ChampionCarousel = () => {

    let data = [];
    let names = [];
    const [championSplash, setCHampionSplash] = useState([]);
    const characters = ['Yasuo', 'Zed', 'Talon', 'Aphelios', 'Mordekaiser', 'Zac']

    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)//pegar o tamanho máximo do carrousel
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, [])

    const getFreeWeekAsync = async () => {
        let dados = await getData('free_rotation', '');
        data = dados.freeChampionIds;
    }

    const createArrayOfNames = async () => {
        let namesArray = await data.map(elements =>  Champion_index(elements));
        names = namesArray;
    }

    const getChampionSplash = () => {
        let image = names.map(element =>{return `${Data('champion_splash', '')}${element}_0.jpg`});
        setCHampionSplash(image)
    }

    const doRequisitions =  async () => {
        await getFreeWeekAsync();
        await createArrayOfNames();
        if(data.length == 0) {
            await getChampionSplash(characters);
        } else {
            await getChampionSplash();
        }
    };
    

    useEffect(() => {
        doRequisitions();
    },[]);

    return (
       <motion.div  className = 'carousel' whileTap = {{cursor:"grabbing"}}>
            <motion.div className = 'inner'
                drag = "x"
                dragConstraints = {{right: 0, left: -width}}
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