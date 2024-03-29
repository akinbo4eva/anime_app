
import './Styles/App.css'
import Anime from './Anime';
import Anime_fetch from './Hooks/Anime_fetch';

const App = () => {
  // const [score, setScore] = useState(1)
  // const [bonus, setPercent] = useState(10)
  // const [data, setData] = useState([])
  const [data, setData] = Anime_fetch('https://nekos.best/api/v2/hug?amount=100')
  // const [cart, setCart] = useState(0);

  const incrementCart = () => {
    const filteredData = data.filter(moore => moore.anime_name.toLowerCase() === ('Mononoke Hime').toLowerCase());
    setData(filteredData)
  }

  // useEffect(() => {
  //   fetch('https://nekos.best/api/v2/hug?amount=100').then(res => res.json()).then(data => {
  //     setData(data.results)

  //   })
  // }, [])

  // console.log(data, 'data')

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

export default App;
