
import '../Styles/Anime.css'
import Anime from '../src/Anime'
import Anime_fetch from '../src/Hooks/Anime_fetch';

const Home = () => {

  const [data, setData] = Anime_fetch('https://nekos.best/api/v2/hug?amount=100')

  const incrementCart = () => {
    const filteredData = data.filter(moore => moore.anime_name.toLowerCase() === ('Mononoke Hime').toLowerCase());
    setData(filteredData)
  }

  

  return (
    <div className='App-header'>
      <div className='text_cont'>
        <h1>Welcome to cartoonFlix.com</h1>
        <p>Please select your choice of cartoon or enter a keyword to search.</p>
        <input placeholder='Enter keyword' type={'text'}/>
        <button onClick={() => incrementCart()}>Search</button>
      </div>
      <Anime data={data}/>
    </div>
  )
}

export default Home;
