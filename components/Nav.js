import Link from 'next/link'

const Nav = () => (
  <div className={"nav"}>
    <img src='../static/logo.jpg' className={"logo"}/>
    <Link href="/">
      <a>HOME</a>
    </Link>
    <Link href="/about">
      <a>ABOUT</a>
    </Link>
    <Link href="/advice">
      <a>ADVICE</a>
    </Link>
    <style jsx>{`
      .nav {
        height:100%;
        float: left;
        // background-color: white;
        // box-shadow: -10px 0px 10px 1px #aaaaaa;


      }
      .logo {
        // border-top: 4px solid black;
        width: 200px;
        height: 150px;
        object-fit: cover;
      }
      a {
        background-color: white;
        color: orange;
        display: block;
        font-size: 15px;
        text-align: center;
        text-decoration: none;
        width:200px;
        height:50px;
        padding: 15px;
        // margin-bottom: 5px;
        margin-top:10px;
        // border-style: solid;
        // border-color: black;
        // border: 2px solid gray;
        font-family: 'Alegreya Sans', sans-serif;
        letter-spacing: 3px;


  
      }
    `}</style>
    <style global jsx>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: sans-serif;
        background-color: #4484CE;
        // background-color: white;

        ;
      }
    `}</style>
  </div>
)

export default Nav
