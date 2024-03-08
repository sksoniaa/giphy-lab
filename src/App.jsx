import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GiphyInfo from './GighyInfo/GiphyInfo'
import GiphySearch from './GiphySearch/GiphySearch'

function App() {

// setting up a useEffect !!!
const [gifData, setGifData] = useState({})
  const [gifName, setGifName] = useState('css')

  function getSearchTerm(searchName){
    console.log(searchName, '<--- searchName');
    setGifName(searchName)
  }

  useEffect(() => {

    const apiEndPoint = `https://api.giphy.com/v1/gifs/search?api_key=Q7aTHXoKUYoE8mRfTzRRok3aqDAiwGDO&q=${gifName}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`


    async function getGiphy() {
      try{
        const response = await fetch(apiEndPoint)

        const data = await response.json()

        console.log(data, "from the db");

        setGifData(data)
      } catch(err) {
        console.log(err);
      }
    }
    getGiphy()

  }, [gifName])


  return (
    <>
      <GiphySearch getSearchTerm={getSearchTerm}/>

      <GiphyInfo gifName={gifData} />
    </>
  )
}

export default App
