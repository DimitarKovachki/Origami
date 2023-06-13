import { useParams } from "react-router-dom";

let About = () => {
    const {name} = useParams();
    console.log(useParams());
    
    return (
        <h1>About Page {name}!</h1>
    )
}

export default About;