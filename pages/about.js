// import Katherine from './../images/katherine.jpg'
// import Brai from './../images/brai.jpg'


const About = () => (
    <div>
      <h1>Our Team</h1>
      <div className={"kathrine-div"}>
        <img src='../static/katherine.jpg' className={"katherine-pic"}/>
        <div className={"kathrine-par"}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className={"brai-div"}>
            <img src='../static/brai.jpg' className={"brai-pic"}/>
            <div className={"brai-par"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
        </div>
      </div>  
    

<style jsx>{`
    h1 {
        color: red;
    }
`}</style>
</div>
)
export default About
