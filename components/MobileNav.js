import Link from 'next/link'

const MobileNav = () => (
    <div className={"mobileNav"}>

    <div className={"navBar"}>
    <Link href="/">
      <a className={"mobileLink"}>HOME</a>
    </Link>
  </div>
    
    <div className={"navBar"}>
   <Link href="/about">
      <a className={"mobileLink"}>ABOUT</a>
    </Link>
    </div>
   
   <div className={"navBar"}>
    <Link href="/advice">
    <a className={"mobileLink"}>ADVICE</a>
    </Link>
    </div>

    <style jsx>{`
    @media (min-width: 766px) {

        .mobileNav {
            display: none;
        }
    }
    @media (max-width: 765px) {
      
        .mobileNav{
         
        }
        .navBar{
          width: 100%;
          height:50px;
          background-color: white;
          text-align: center;
          border-bottom-color: lightgray;
          border-width: 1px;
          border-style: solid;
          padding: 3.5%;
        }
        .mobileLink {
          
          color:black;
          position: inline-block;
          text-decoration:none;
          font-family: 'Caudex', sans-serif;
          letter-spacing: 5px;
          font-size:15px;
          align-items: center;
          font-family: 'Caudex', sans-serif;
          color: #4484CE;


        }
      }

}
`} </style>
</div>
)
export default MobileNav
