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
        margin-left: 20px;
        margin-top: 26px;

      
      }
      .logo {
        border-radius:10px;
        height: 155px;
        width: 200px;
        margin-top: 10px;
        object-fit: cover;
        background-color: none;

      }
      a {
        color: #4484CE;

        border-radius:10px;
        background-color: white;
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

      .mobileNav {
        display: none;
      }
      @media (max-width: 765px) {
        .nav {
          display: none;
        }
      }
    `} </style>

    <style global jsx>{`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

      }
      body {
        font-family: sans-serif;
        background-color: #0E1428;
      }

    `}</style>
    </div>
)

export default Nav
