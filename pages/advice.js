import Nav from '../components/Nav'

const Advice = () => (
  <div className={"advice"}>
    <Nav className={"nav"}/>
    <div className={"body"}>
      <h1>ADVICE FROM US</h1>
    </div>
    <style jsx>{`
      .advice {
        display: grid;
        grid-template-columns:1fr 8fr;
        grid-template-areas: "nav body"
      }
      .nav {
        grid-area: nav;
      }
      .body {
        margin-top: 40px;
        grid-area: body;
        display:flex;
        justify-content: center;
      }
      h1 {
        text-align: center;
        background-color: #F19F4D;
      }
    `}</style>
  </div>
)

export default Advice
