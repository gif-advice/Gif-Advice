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
    `}</style>
  </div>
)

export default Advice
