import Nav from '../components/Nav'
import MobileNav from '../components/MobileNav'

const Advice = () => (
  <div className={"advice"}>
    <div className={"body"}>
    <head><link href="https://fonts.googleapis.com/css?family=Aladin|Caudex|Contrail+One|Marmelad|Shrikhand" rel="stylesheet"/></head>
      
      <header>ADVICE FROM US</header>
      <Nav className={"nav"}/>
      <MobileNav className={"mobNav"}/>
      
    </div>
    <style jsx>{`
    
      
      .nav {
        float: left;
      }
      header {
        height: 250px;
        width:100%;
        font-size: 100px;
        color: white;
        letter-spacing: 2px;
        text-align: center;
        font-family: Shrikhand;
        border-bottom: 2px solid black;
        padding: 50px;
        background-color: #F9CF00;
      }
      .body {
        margin: 0 auto;
        background-color: #0E1428;
      }
      h1 {
        text-align: center;
        background-color: #F19F4D;
      }


      
      @media (max-width: 768px) {
        header {
          width:100%;
          font-size: 25px;
        }
      }
    `}</style>
  </div>
)

export default Advice
