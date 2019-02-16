import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'
import Nav from '../components/Nav'
const {publicRuntimeConfig} = getConfig()

const Index = (props) => (
  <div className={"home"}>
    <div className={"body"}>
      <header><link href="https://fonts.googleapis.com/css?family=Alegreya+Sans|Hind+Siliguri" rel="stylesheet"/></header>
      <Nav className={"nav"}/>
      <div className={"section"}>
        <img src={props.giphy} alt="Giphy"></img>
        <p>{props.advice}</p>
      </div>
    </div>
    <style jsx>{`
      .home {
        // display:flex;
        // background-color: #D9D9D9;
        box-shadow: 0px -10px 10px -10px black;

      }
      .nav {
        float: left;
        width: 257px;
        // box-shadow: -10px 0px 10px 1px rgba(68,68,68,0.6);


      }
      .body {

        background-color:#F9CF00; 
        margin: 0 auto;
        width:960px;
      }

      header {
        background-image: url("./static/headerImg.jpg");
        background-repeat: no-repeat;
        width: 960px;
        height: 300px;
        text-align: center;
        font-size: 50px;
        justify-content: center;
        padding: 40px;
        border-bottom: 15px solid gray;
        // box-shadow: 5px 5px 5px 5px rgba(68,68,68,0.6);

      }
      .section {
        width:740px;
        margin: 0 auto;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: white;
        justify-content: center;
        float:left;
        margin-left: 20px;
        margin-top: 7px;
        background-color:#D9D9D9;
        box-shadow: -60px 0px 100px -90px rgba(68,68,68,0.6);
        font-family: 'Alegreya Sans', sans-serif;


      }
      img {
        display: block;
        // padding-top: 30px;
        margin: 5px auto;
        // border: 2px solid black;

      }
      p {
        color: white;
        text-align: center;
        margin-top:20px;
        font-size: 30px;
        letter-spacing: 4px;
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
