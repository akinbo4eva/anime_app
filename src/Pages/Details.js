import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import Anime_fetch from '../Hooks/Anime_fetch';

const Details = () => {
    const params = useParams();
    const [data, setData] = useState(null);
    

    useEffect(() => {
        fetch('https://nekos.best/api/v2/hug?amount=100').then(res => res.json()).then(data =>{
        if(params.name) {
            const filteredData = data.results.find(moore => moore.anime_name.toLowerCase() === params.name);
            setData(filteredData)
          
        }
    })
    },[params.name])

    return(data ?
        <div className='anime'>
            <img src={data.url} alt="anime-gif" />
            <p>{data.anime_name}</p>
        </div> : <p>No Data</p>
    )
}
export default Details;