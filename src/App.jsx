import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GiphyInfo from './GighyInfo/GiphyInfo'
import GiphySearch from './GiphySearch/GiphySearch'

function App() {

  return (
    <>
      <GiphySearch />

      <GiphyInfo />
    </>
  )
}

export default App
