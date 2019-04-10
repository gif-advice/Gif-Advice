import Nav from '../components/Nav'
import MobileNav from '../components/MobileNav'

const About = () => (

  <div className={"about"}>
    <div className={"body"}>
    <head><link href="https://fonts.googleapis.com/css?family=Aladin|Caudex|Contrail+One|Marmelad|Shrikhand" rel="stylesheet"/></head>
      
      <header>OUR TEAM</header>
      <Nav className={"nav"}/>
      <MobileNav className={"mobNav"}/>

      
      <div className={"container"}>
      <div className={"section"}>
      <div className={"name"}>BRAI FRAUEN</div>

        <img src='../static/brai.jpg'/>
        <p>I’m a UI Developer. I love creating and designing sites. In my free time you’ll find me ether at a art gallery checking out new work or find me a flea market scoring cool vintage items.</p>
        
        <div className={"Linkbutton"}>
        <a href="https://www.linkedin.com/in/braifrauen/" class="button">LinkenIn</a>
        </div>

        <div className={"GitHub"}>
          <a href="https://github.com/ashabrai" class="button">Github</a>
        </div>
      </div> 
      
      <div className={"section"}>
      <div className={"name"}>KATHERINE SMITH</div>

        <img src='../static/katherine.jpg'/>
        
        <p>For the past 3 years, I worked in the veterinary field, first as a vet assistant and then as a vet tech. Before that, I was in the Air Force for 4 years where I worked as a weather forecaster. I also have a degree in Aeronautical Science and Engineering from the University of California, Davis. </p>
        
        <div className={"Linkbutton"}>
        <a href="https://www.linkedin.com/in/ksmith10309/" class="button">LinkenIn</a>
        </div>
        
        <div className={"GitHub"}>
          <a href="https://github.com/ksmith10309" class="button">Github</a>
        </div>

      </div>
    </div>
    
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
        font-size: 80px;
        color: white;
        letter-spacing: 2px;
        text-align: center;
        font-family: Shrikhand;
        border-bottom: 2px solid black;
        padding: 50px;
        background-color: #F9CF00;
      }

      .name {
        position: absolute;
        font-size: 55px;
        z-index: 10;
        color:  #F9CF00;
        margin-left: 300px;
        font-family: 'Shrikhand';
        letter-spacing: 4px;
      }

      p{
        font-family: 'Caudex', sans-serif;
        margin-block-start: 6em;
        margin-block-end: 1em;
        margin-inline-start: 30px;
        width: 500px;
        font-size: 17px;
      }
      .section {
        display: flex;
        width:80%;
        margin: 0 auto;
        padding: 40px;
        background-color: white;
        margin-left: 237px;
        margin-top: 34px;
        margin-bottom: 5px;
        border-radius:10px;
      }
      img {
        max-width: 350px;
        max-height: 350px;
        vertical-align: middle;
        position: relative;
      }
      .Linkbutton {
        position: absolute;
        width:150px;
        height: 50px;
        margin-top: 250px;
        margin-left: 450px;
        border-radius: 25px;
        background-color:#4484CE;
        text-align: center;
        padding: 15px;
        letter-spacing:2px;


      }
      .GitHub{
        position: absolute;
        width:150px;
        height: 50px;
        background-color:#4484CE;
        margin-top: 250px;
        margin-left: 650px;
        border-radius: 25px;
        padding: 15px;
        text-align: center;
        letter-spacing:2px;
        // border: 2px solid #F9CF00;
      }
      a{
        text-decoration:none !important;
        font-family: Caudex;
        color: white;
        font-size: 17px;
        padding: 20px;
      }
      .mobNav {
        display: none;
      }
    
      @media only screen and (max-width: 765px) {
        .nav{
          display:none;
        }
        .body {
         
        }
        header {
          // width:100%;
          font-size: 30px;
          padding:100px;
        } 
        .name {
          margin: 0 auto;
          font-size: 30px;
          position: absolute;
          margin-left: 20px;
          width: 100px;
          top: 295px;
        }
        p{
          height: 30%;
          // background-color: pink;
          position: absolute;
          width: 80%;
          margin: auto;
          top: 400px;
          line-spacing: 20px;
         }
        .section {
          width:100%;
          height: 700px;
          position: relative;
          margin: 0 auto;
          top: 50px;
          margin-bottom: 20px;
          border-radius: 1px;
          font-size: 10px;
          // color: #4484CE;

          

        }
        img {
          margin: 0 auto;
          width: 80%;
          position:absolute;
      }
      a {
        margin-right: 30px;
        text-decoration: none;

      }
        .Linkbutton {
          position: absolute;
          margin: 0 auto;
          bottom: 70px;
          border-radius: 25px;
          width:140px;
          font-size: 15px;

      }
        .GitHub {
          position: absolute;
          margin: 0 auto;
          bottom: 70px;
          right: 90px;
          border-radius: 25px;
          width:140px;
          height: 50px;
          font-size: 15px;

      }
    `}</style>
  </div>
)

export default About
