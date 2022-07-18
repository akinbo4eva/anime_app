import './Styles/Anime.css'



const Anime = (props) => {

    return (
        <div className="anime_list">

            {props.data && props.data.length ?
                props.data.map((moore, i) => {
                    return (
                        <div className='anime_card' key={i}>
                            <img src={moore.url} alt="cartoon_gif" />
                            <p>{moore.anime_name}</p>
                        </div> 
                    )

                })
                : <h3>No found</h3>}
        </div>
    )
}
export default Anime;