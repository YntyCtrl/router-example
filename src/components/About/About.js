const { Route, Link } = require("react-router-dom")
const { default: Example } = require("./Example/Example")

const About = () => {
    return ( 
        <div>
            About
             
            <Link to="/about/example">Example</Link>
            <Route path="/about/example" component={Example} />
        </div>
     );
}
 
export default About;