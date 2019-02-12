import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import Nav from '../components/Nav'
const {publicRuntimeConfig} = getConfig()

const Index = (props) => (
  <div className={"home"}>
    <Nav className={"nav"}/>
    <div className={"body"}>
      <h1>WELCOME TO GIF ADVICE</h1>
      <div className={"section"}>
        <img src={props.giphy} alt="Giphy"></img>
        <h2>{props.advice}</h2>
      </div>
    </div>
    <style jsx>{`
      .home {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-areas: "nav body"
      }
      .nav {
        grid-area: nav;
      }
      .body {
        margin-top: 40px;
        grid-area: body;
      }
      h1 {
        text-align: center;
      }
      .section {
        background-color: rgb(224, 165, 123);
        margin: 20px;
        padding: 20px;
      }
      img {
        display: block;
        margin: 20px auto;
      }
      h2 {
        text-align: center;
      }
    `}</style>
  </div>
)

Index.getInitialProps = async function() {
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

export default Index
