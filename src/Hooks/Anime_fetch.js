import { useEffect, useState } from "react";

const Anime_fetch = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setData(data.results)
        })
    },[])

    return [data, setData]
}

export default Anime_fetch;