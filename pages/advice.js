import fetch from 'isomorphic-unfetch'

const Advice = (props) => (
  <h1>{props.advice}</h1>
)

Advice.getInitialProps = async function() {
  const res = await fetch('https://api.adviceslip.com/advice')
  const data = await res.json()

  return {
    advice: data.slip.advice
  }
}

export default Advice
