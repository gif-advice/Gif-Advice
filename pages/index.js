import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import Nav from '../components/Nav'
import MobileNav from '../components/MobileNav'
const {publicRuntimeConfig} = getConfig()

const Index = (props) => (
    <div className={"body"}>
      <head><link href="https://fonts.googleapis.com/css?family=Aladin|Caudex|Contrail+One|Marmelad|Shrikhand" rel="stylesheet"/></head>
      <header>
      You need random advice?
      You've come to the right place.
      </header>
      <Nav className={"nav"}/>
      <MobileNav className={"mobNav"}/>
      <div className={"section"}>
        <img src={props.giphy} alt="Giphy"></img>
        <p>{props.advice}</p>
      </div>
    <style jsx>{`
     
      .nav {
        float: left;
      }
      .body {
        margin: 0 auto;
        background-color: #0E1428;
        width:100%;
      }

      header {

        height: 250px;
        width:100%;
        font-size: 50px;
        color: white;
        letter-spacing: 2px;
        text-align: center;
        font-family: Shrikhand;
        border-bottom: 2px solid black;
        padding: 50px;
        background-color: #F9CF00;
      }

      .section {
        width:80%;
        margin: 0 auto;
        padding: 40px;
        background-color: white;
        justify-content: center;
        margin-left: 237px;
        margin-top: 34px;
        margin-bottom: 50px;
        font-family: 'Caudex', sans-serif;
        border-radius:10px;

      }
      img {
        display: block;
        margin: 5px auto;
        border-radius: 10px;
        padding: 10px;
        border: 5px solid white;
        height: auto;
      }
      p {
        color: #4484CE;
        text-align: center;
        margin-top:20px;
        font-size: 30px;
        letter-spacing: 3px;
      }
      .mobNav {
        display: none;
      }
      @media only screen and (max-width: 768px) {
        header {
          width:100%;
          font-size: 25px;
        }
        .section{
          width:100%;
          position: relative;
          margin: 0 auto;
          top: 50px;
          border-radius: 1px;
        }
        img {
          position: relative;
          margin: 0 auto;
          width: 100%;

        }
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
