import { useState, useEffect} from "react";
import  { data } from "../Data/data";
import axios from 'axios';

export async function UseFetch(name) {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    const url = data('encrypt', name);

    useEffect(() => {
        axios.get(url)
        .then(response => setData(response.data))
        .catch(err => {
            setError(err);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [])

    return { data, isFetching, error };
}