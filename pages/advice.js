import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

const Advice = (props) => (
  <div>
    <h2>{props.advice}</h2>
    <img src={props.giphy} alt="Giphy"></img>
  </div>
)

Advice.getInitialProps = async function() {
  const adviceRes = await fetch('https://api.adviceslip.com/advice')
  const adviceData = await adviceRes.json()
  const advice = adviceData.slip.advice

  const giphyRes = await fetch(`http://api.giphy.com/v1/gifs/translate?s=${advice}&weirdness=5&api_key=${publicRuntimeConfig.API_KEY}`)
  const giphyData = await giphyRes.json()

  return {
    advice: advice,
    giphy: giphyData.data.images.original.url
  }
}

export default Advice
