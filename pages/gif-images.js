import fetch from 'isomorphic-unfetch';

const GIF_API_KEY = process.env.GIF_API_KEY;

const GifImages = (props) => (
    <div>{props.giphy}</div>
)

GifImages.getInitialProps = async function () {
    const res = await fetch("https://api.giphy.com/v1/gifs/search:q&key=GIF_API_KEY")
    const data = await res.json()
    return { giphy: data.giphy }
}

export default GifImages;