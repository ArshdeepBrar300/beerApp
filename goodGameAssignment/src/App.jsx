import { useState, useEffect } from 'react'
import Loader from './components/Loader';
import './App.css'
import BeerList from './components/BeerList';
import Search from './components/Search';

function App() {
  const [beersData, setBeersData] = useState([])
  //toSave fetchedData(since fetched data is limited)
  const [origSearchBeer, setOrigBeer] = useState([])

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers');

      const data = await response.json()

      setBeersData(data); // data to be shown to user
      setOrigBeer(data); //save original fetched data
      setLoading(false)


    } catch (error) {
      console.log('error in fetching beer data')
    }
  }
  const searched = (searchedBeer) => {

    // console.log(beersData)
    const filteredBeers = (origSearchBeer.filter((beer) => {

      return beer.name.toString().toLowerCase().includes(searchedBeer.toString().toLowerCase())
    }))
    setBeersData(filteredBeers)

  }

  const clearSearch = () => {

    setBeersData(origSearchBeer) // setting original data to be shown
    console.log(beersData)
  }


  return (

    <div>
      <div className="container  h-14  text-center w-full sm:w-full bg-slate-500 sm:text-2xl ">
        <div className=" font-bold  h-12 pt-2  flex ml-4 justify-between text-white text-3xl ">
          <h2>Beer App</h2>
          <Search searchHandle={searched} clearHandle={clearSearch} />
        </div>
      </div>
      <div>
        {loading ? <Loader /> : <BeerList beersData={beersData} />}
      </div>

    </div>





  )
}

export default App
