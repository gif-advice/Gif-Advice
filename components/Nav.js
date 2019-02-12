import Link from 'next/link'

const Nav = () => (
  <div className={"nav"}>
    <img src='../static/logo.png' className={"logo"}/>
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
        border-right: 5px solid white;
      }
      .logo {
        width: 100%;
      }
      a {
        background-color: rgb(233, 130, 80);
        color: white;
        display: block;
        font-size: 20px;
        margin-top: 20px;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        width: 100%;
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
      }
    `}</style>
  </div>
)

export default Nav
