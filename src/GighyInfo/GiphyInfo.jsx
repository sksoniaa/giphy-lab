

export default function GiphyInfo({ gifName }) {
  console.log(gifName, 'gifName');
  return(
    <div>
      <h1>Title: {}</h1>
   <img src={gifName.data[0].images.original.url} alt="" />

</div>
  )
}