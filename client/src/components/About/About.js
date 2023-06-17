import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useCounter from "../hooks/useCounter";

let About = () => {
    const { name } = useParams();

    const [ counter, addMoreCounter ] = useCounter();
    const [flag, setFlag] = useState(false);
    const [email, setEmail] = useState('');

    return (
        <>
            <h1>About Page {name}!</h1>
            <div>
                <span>Flag : {flag ? 'True' : 'False'}</span>
                <div>
                    <button onClick={() => setFlag(!flag)}>Change Flag</button>
                </div>
            </div>
            <div>
                <span>Email : {email}</span>
                <div>
                    <input onChange={(e) => setEmail(e.target.value)} defaultValue={'test@abv.bg'} />
                </div>
            </div>
            <div>
                <span>Counter : {counter}</span>
                <div>
                    <button onClick={addMoreCounter}>Add more!</button>
                </div>
            </div>

        </>
    )
}

export default About;