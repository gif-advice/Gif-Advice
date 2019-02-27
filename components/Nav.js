import Link from 'next/link'

const Nav = () => (
  <div className={"nav"}>
    <Link href="/">
      <a>HOME</a>
    </Link>
    <Link href="/about">
      <a>ABOUT</a>
    </Link>
    <Link href="/advice">
      <a>ADVICE</a>
    </Link>
    <img src='../static/logo.jpg' className={"logo"}/>

    <style jsx>{`
      .nav {
        height:100%;
        float: left;
        // background-color: gray;

      }
      .logo {
        // padding:2px;
        height: 155px;
        width: 200px;
        margin-top: 10px;
        object-fit: cover;
        background-color: none;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);



      }
      a {
        background-color: #4484CE;
        color: #F19F4D;
        display: block;
        font-size: 15px;
        text-align: center;
        text-decoration: none;
        width:200px;
        height:50px;
        padding: 15px;
        margin-top:10px;
        font-family: 'Caudex', sans-serif;
        letter-spacing: 3px;
        font-size:17px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

      
  
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
        // background-color: #4484CE;
        // background-color: white;

        ;
      }
    `}</style>
  </div>
)

export default Nav
