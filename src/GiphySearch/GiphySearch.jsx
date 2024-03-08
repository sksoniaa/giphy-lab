import { useState } from "react"


export default function GiphySearch({getSearchTerm}) {

  // make sure the form input is being tracked by a STATE variable
  const [giphySearchInput, setGiphySearchInput] = useState('')

  function handleChange(e) {
    setGiphySearchInput(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    getSearchTerm(giphySearchInput)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search" value={giphySearchInput} onChange={handleChange}/>
      <button>Search</button>
    </form>
  )
}