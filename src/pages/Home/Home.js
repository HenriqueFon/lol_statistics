import { useState, useEffect } from "react";
import ChampionCaroseulData from "../../components/ChampionCaroseul/ChampionCaroseulData";
import NameForm from "../../components/NameForm/NameForm";
import  Data  from "../../Data/Data";
import { Champion_index } from "../../Data/Champion_index";

const Home = () => {

    return (
        <div>
            <h1>Mascoot Stats</h1>
            <ChampionCaroseulData />
            <NameForm />
        </div>
    )
}

export default Home;