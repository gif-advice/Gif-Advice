import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import Nav from '../components/Nav'
const {publicRuntimeConfig} = getConfig()

const Index = (props) => (
  <div className={"home"}>
    <div className={"body"}>
      <head><link href="https://fonts.googleapis.com/css?family=Aladin|Caudex|Contrail+One|Marmelad|Shrikhand" rel="stylesheet"/></head>
      <header>
        <div className={"yellowBox"}>You need random advice? </div>
        <div>You've come to the right place.</div>
      </header>
      <Nav className={"nav"}/>
      <div className={"section"}>
        <img src={props.giphy} alt="Giphy"></img>
        <p>{props.advice}</p>
      </div>
    </div>
    <style jsx>{`
      .home {
        // background-color: #D9D9D9;
        width:100%;
        
      }
      .nav {
        float: left;
      }
      .body {
        margin: 0 auto;
        width:960px;

      }

      header {
        height: 250px;
        width:100%;
        font-size: 50px;
        color: black;
        letter-spacing: 2px;
        font-family: Shrikhand;
        border-bottom: 2px solid black;
        padding: 50px;
      }

      .section {
        width:750px;
        margin: 0 auto;
        padding: 40px;
        // padding-top: 40px;
        // padding-bottom: 40px;
        background-color: white;
        justify-content: center;
        float:left;
        margin-left: 10px;
        margin-top: 9px;
        font-family: 'Caudex', sans-serif;
        // background-color: white;
        background-color: #F9CF00;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);




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
        // border-top: 2px solid white;
        color: #4484CE;
        text-align: center;
        margin-top:20px;
        font-size: 30px;
        letter-spacing: 3px;
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
