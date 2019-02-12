import Nav from '../components/Nav'

const About = () => (

  <div className={"about"}>
    <Nav className={"nav"}/>
    <div className={"body"}>
      <h1>OUR TEAM</h1>
      <div className={"section"}>
        <img src='../static/brai.jpg'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div> 
      <div className={"section"}>
        <img src='../static/katherine.jpg'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    <style jsx>{`
      .about {
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
        max-width: 200px;
        display: block;
        margin: 20px auto;
      }
    `}</style>
  </div>
)

export default About
